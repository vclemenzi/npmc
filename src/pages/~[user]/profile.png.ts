import type { APIRoute } from "astro";
import cheerio from "cheerio";

export const GET: APIRoute = async ({ params }) => {
  const body = await fetch(`https://www.npmjs.com/~${params.user}`).then((res) => res.text());

  const $ = cheerio.load(body);
  const avatar = $('img[src^="/npm-avatar"]')?.attr("src") || null;

  const buf = await fetch(`https://www.npmjs.com${avatar}`);

  return new Response(await buf.arrayBuffer());
}
