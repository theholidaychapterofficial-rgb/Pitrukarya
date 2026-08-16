ALTER VIEW public.public_reviews SET (security_invoker = on);

GRANT SELECT (id, name, rating, review_text, service, featured, status, created_at, approved_at) ON public.reviews TO anon;

CREATE POLICY "Anyone can read approved reviews" ON public.reviews
FOR SELECT TO anon USING (status = 'approved');

REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM anon, public;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;