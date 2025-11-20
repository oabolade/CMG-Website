/*
  # Fix RLS policy for anonymous submissions

  This migration ensures the anon role can insert into contact_submissions
  by creating a specific policy for the anon role.

  1. Changes
    - Drop existing insert policy
    - Create new policy specifically for anon role
    - Create policy for authenticated users
*/

-- Drop the existing insert policy
DROP POLICY IF EXISTS "allow_anon_insert" ON contact_submissions;
DROP POLICY IF EXISTS "allow_authenticated_insert" ON contact_submissions;

-- Create a policy specifically for the anon role
CREATE POLICY "allow_anon_insert"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Also create one for authenticated users
CREATE POLICY "allow_authenticated_insert"
  ON contact_submissions
  FOR INSERT
  TO authenticated
  WITH CHECK (true);