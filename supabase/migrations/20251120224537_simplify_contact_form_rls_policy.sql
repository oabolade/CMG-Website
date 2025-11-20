/*
  # Simplify Contact Form RLS Policy

  1. Changes
    - Drop existing anon_insert_contact policy
    - Create a new simpler policy that allows all anonymous inserts
    - This removes any potential issues with policy evaluation

  2. Security
    - Still restrictive: only allows INSERT for anonymous users
    - Authenticated users can still read/update
*/

-- Drop the existing policy
DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;

-- Create a simpler policy that explicitly allows anonymous inserts
CREATE POLICY "anon_can_insert_contact"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
