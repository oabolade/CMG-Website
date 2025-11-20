/*
  # Fix Contact Form RLS Definitively

  This migration completely resets RLS policies to fix the 42501 error
  that's preventing form submissions from the Supabase JS client.

  1. Changes
    - Disable RLS temporarily
    - Drop all existing policies
    - Grant explicit INSERT permission to anon role
    - Re-enable RLS
    - Create a simple, permissive INSERT policy for anon users
    - Keep existing SELECT and UPDATE policies for authenticated users

  2. Security
    - Anonymous users can INSERT (submit contact forms)
    - Authenticated users can SELECT and UPDATE (admin functionality)
*/

-- Disable RLS temporarily
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "allow_anon_insert" ON contact_submissions;
DROP POLICY IF EXISTS "allow_authenticated_insert" ON contact_submissions;
DROP POLICY IF EXISTS "allow_authenticated_select" ON contact_submissions;
DROP POLICY IF EXISTS "allow_authenticated_update" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can view all submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update submissions" ON contact_submissions;

-- Ensure anon role has the necessary grants
GRANT INSERT ON contact_submissions TO anon;
GRANT SELECT ON contact_submissions TO anon;

-- Re-enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a permissive INSERT policy for anonymous users
CREATE POLICY "anon_insert_contact"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create SELECT policy for authenticated users
CREATE POLICY "auth_select_contact"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create UPDATE policy for authenticated users
CREATE POLICY "auth_update_contact"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);