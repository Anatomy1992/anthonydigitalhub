-- Fix: do NOT allow any authenticated user to read all contact submissions (PII)
-- The site is a public portfolio; submissions should only be readable via Supabase dashboard/service role.

DROP POLICY IF EXISTS "Authenticated users can view submissions" ON public.contact_submissions;

-- (No replacement SELECT policy intentionally)
