/*
  # Fix contact submissions RLS policies - Final

  This migration properly configures RLS for the contact_submissions table
  to allow anonymous users to submit the contact form.

  1. Changes
    - Re-enables RLS on contact_submissions table
    - Drops all existing policies to start fresh
    - Creates a simple, permissive INSERT policy for all roles
    - Creates policies for authenticated users to view and update submissions
*/

-- Re-enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can view all submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update submissions" ON contact_submissions;

-- Create new INSERT policy that allows anyone (including anon) to insert
CREATE POLICY "allow_anon_insert"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create SELECT policy for authenticated users only
CREATE POLICY "allow_authenticated_select"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create UPDATE policy for authenticated users only
CREATE POLICY "allow_authenticated_update"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);