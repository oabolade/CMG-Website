/*
  # Grant anonymous user insert permissions

  This migration grants direct table permissions to the anon role
  and simplifies the RLS policy to allow inserts from anyone.

  1. Changes
    - Grant INSERT permission on contact_submissions to anon role
    - Recreate RLS policy with explicit permissions
*/

-- Grant table permissions to anon role
GRANT INSERT ON contact_submissions TO anon;

-- Drop and recreate the insert policy to be more permissive
DROP POLICY IF EXISTS "allow_anon_insert" ON contact_submissions;

-- Create a simple policy that allows all inserts
CREATE POLICY "allow_anon_insert"
  ON contact_submissions
  FOR INSERT
  WITH CHECK (true);