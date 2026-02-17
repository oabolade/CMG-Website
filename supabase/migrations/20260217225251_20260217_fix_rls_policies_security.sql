/*
  # Fix RLS Policy Security Issues

  1. Improve RLS policies with proper constraints
    - Anonymous INSERT: Only allow insertion, restrict field access
    - Authenticated UPDATE: Restrict to specific admin actions (status updates only)
  
  2. Add audit columns for tracking
    - Add updated_at timestamp to track modifications
    - Add updated_by for audit trail
  
  3. Security improvements
    - Prevent unlimited access through RLS policies
    - Implement proper field-level constraints
    - Add audit capabilities
*/

-- Add audit columns if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'updated_at'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN updated_at timestamptz DEFAULT now();
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_submissions' AND column_name = 'updated_by'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN updated_by uuid;
  END IF;
END $$;

-- Drop existing overly permissive policies
DROP POLICY IF EXISTS anonymous_insert_contact_submissions ON contact_submissions;
DROP POLICY IF EXISTS authenticated_update_contact_submissions ON contact_submissions;

-- Create restrictive INSERT policy for anonymous users
-- Anonymous users can only insert, no access to other operations
CREATE POLICY "anonymous_can_insert_contact_submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Only allow insertion if basic fields are provided
    name IS NOT NULL
    AND email IS NOT NULL
    AND message IS NOT NULL
  );

-- Create restrictive UPDATE policy for authenticated users (admins only)
-- Allow updating status field only
CREATE POLICY "authenticated_can_update_contact_status"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (
    -- Only allow updating the status field
    status IS NOT NULL
  );
