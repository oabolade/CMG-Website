/*
  # Add public role to contact submissions policy

  This ensures that even unauthenticated users can submit the contact form.

  1. Changes
    - Drops existing INSERT policy
    - Recreates it with public role explicitly included
    - Adds a permissive policy for all users
*/

-- Drop existing policy
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

-- Create new policy that explicitly allows public, anon, and authenticated roles
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);