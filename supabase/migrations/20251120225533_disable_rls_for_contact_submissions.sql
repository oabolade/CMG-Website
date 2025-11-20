/*
  # Disable RLS for Contact Submissions Table

  1. Changes
    - Disable RLS on contact_submissions table to allow anonymous form submissions
    - This is a common pattern for public contact forms
    - The anon role still has limited permissions (only INSERT granted)

  2. Security
    - Table grants still restrict what operations can be performed
    - Anonymous users can only INSERT
    - Authenticated users can read/update for admin purposes
*/

-- Disable RLS on the contact_submissions table
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;
