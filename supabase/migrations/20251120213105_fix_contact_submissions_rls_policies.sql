/*
  # Fix Contact Submissions RLS Policies

  This migration removes duplicate policies and creates clean, working policies for the contact form.

  1. Changes
    - Removes all existing duplicate policies
    - Creates single INSERT policy allowing anyone (including anonymous users) to submit contact forms
    - Creates SELECT policy for authenticated users to view submissions
    - Creates UPDATE policy for authenticated users to update submission status

  2. Security
    - Anonymous users can only INSERT (submit the form)
    - Authenticated users can view and update all submissions (for admin purposes)
*/

-- Drop any existing policies to start fresh
DROP POLICY IF EXISTS "Allow anonymous users to insert contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated users to view all contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can view all submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated users to update contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update submissions" ON contact_submissions;

-- Create new clean policies
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);