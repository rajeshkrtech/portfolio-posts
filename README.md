# portfolio-posts (Astro)

This is a personal portfolio/blog site built with Astro. It sources blog posts from two places:

- Local content (src/content/blog) for authored Markdown/MDX posts
- A Strapi CMS via the STRAPI_URL environment variable for external posts

Changes made:
- Blog index links now use post slugs instead of numeric IDs.
- Blog page (src/pages/blog/[slug].astro) will gracefully handle missing Astro.props.post by attempting to fetch the post by slug or by ID.

## Requirements
- Node >= 22.12.0
- npm (or pnpm/yarn)

## Setup
1. Install dependencies:

   npm install

2. Create a .env file in the project root with at least the STRAPI_URL value (only required if using Strapi):

   STRAPI_URL="https://your-strapi.example.com"

   (When running in production, set the environment variable in your hosting platform.)

3. Run the dev server:

   npm run dev

4. Build for production:

   npm run build

5. Preview the production build locally:

   npm run preview

## Project structure (important parts)
- src/pages/ - Route files. Blog routes live under src/pages/blog/.
- src/content/blog/ - Local Markdown/MDX posts (Astro Content Collections).
- src/layouts/ - Layouts such as BlogPost.astro used to render posts.
- src/lib/strapi.ts - Helper to fetch data from Strapi. Set STRAPI_URL to enable.

## How blog routing works
- The index at /blog lists collection entries from src/content/blog and links to /blog/{slug}/.
- The dynamic page src/pages/blog/[slug].astro attempts to use Astro.props.post (set by getStaticPaths when pre-rendering). If Astro.props.post is undefined (for example, when visiting a statically generated route that wasn't provided), the page will try to fetch the post from Strapi by slug. If slug looks like a numeric ID, it will also try to fetch by ID.

## Adding posts
- Local posts: add a Markdown/MDX file to src/content/blog/ with frontmatter (title, pubDate, etc.) and a filename/slug.
- Strapi posts: create posts in your Strapi instance and ensure the slug field is set. The site will fetch posts from STRAPI_URL/api/posts.

## Environment & deployment notes
- STRAPI_URL should point to the Strapi instance root (no trailing slash), e.g. https://cms.example.com
- If you need client-exposed variables, prefix them with PUBLIC_ (Astro/Vite behavior). STRAPI_URL here is consumed server-side.

## Troubleshooting
- If a post shows "Post not found", verify the slug exists in local content or Strapi and that STRAPI_URL is correct.
- For image issues, ensure media are returned in Strapi via populate=media and SERVER_URL is set.

If you'd like, I can also: update the index layout to show fallback previews for Strapi posts, add a .env.example, or wire up CI/CD deployment steps.
