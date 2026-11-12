# Allied Enterprises Website

Company website for Allied Enterprises WLL (Doha, Qatar) — Next.js + Payload CMS 3 + PostgreSQL.

## Local development

1. `cp .env.example .env` and set `DATABASE_URL` (PostgreSQL) and `PAYLOAD_SECRET`
2. `npm install`
3. `npm run dev` → site at http://localhost:3000, admin at http://localhost:3000/admin

After changing any Payload collection/global, run `npm run generate:types`.

## Production

Built on a dev machine and run on the Windows server with PM2 on port 3002 behind IIS:

```
npm run build
npm run start -- -p 3002
```

Image resizing in production needs sharp's Windows DLLs in the standalone build (see `outputFileTracingIncludes` in `next.config.ts`).
