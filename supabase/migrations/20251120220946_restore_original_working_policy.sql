/*
  # Restore Original Working RLS Policy

  This migration restores the original working policy configuration that allowed
  successful form submissions earlier today.

  1. Changes
    - Drop all current INSERT policies
    - Restore the original "Anyone can submit contact form" policy
    - Policy allows both anon and authenticated roles
    - Keep existing SELECT and UPDATE policies for authenticated users

  2. Security
    - Anonymous users can INSERT contact form submissions
    - Authenticated users can SELECT and UPDATE submissions
*/

-- Drop all current INSERT policies
DROP POLICY IF EXISTS "allow_anon_insert" ON contact_submissions;
DROP POLICY IF EXISTS "allow_authenticated_insert" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

-- Restore the original working policy
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);