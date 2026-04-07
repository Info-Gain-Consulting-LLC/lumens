# Lumens — Deployment Record

## Production
- URL: https://lumens-ruaka.vercel.app
- Platform: Vercel
- Repository: GitHub → main branch

## Local Development
- Run: npm run dev
- URL: http://localhost:3000

## Environment Variables
- Local: .env.local (never committed to git)
- Production: Vercel Environment Variables dashboard

## Updating the Site
1. Make changes locally
2. Run: npm run validate && npm run build
3. git add . && git commit -m "your message"
4. git push origin main
5. Vercel auto-deploys within 2-3 minutes

## Key URLs
- Production: https://lumens-ruaka.vercel.app
- Vercel dashboard: https://vercel.com
- Supabase dashboard: https://supabase.com
- Admin dashboard: https://lumens-ruaka.vercel.app/admin
