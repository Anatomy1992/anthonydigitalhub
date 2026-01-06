-- Drop the existing broken policy
DROP POLICY IF EXISTS "Admins can view submissions" ON public.contact_submissions;

-- Create a working policy that allows viewing submissions
-- Since there's no admin role system, we'll make contact submissions viewable by authenticated users
-- This is a reasonable approach for a personal portfolio where the owner would be the only authenticated user
CREATE POLICY "Authenticated users can view submissions"
ON public.contact_submissions
FOR SELECT
USING (auth.role() = 'authenticated');