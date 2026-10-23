// Override with NEXT_PUBLIC_SITE_URL if the site moves to a custom domain.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://george-johnson.vercel.app").replace(/\/$/, "");
