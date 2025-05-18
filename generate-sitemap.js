import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";
import { Readable } from "stream";
import xmlFormatter from "xml-formatter";

const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  // оставшиеся урлы.
];

const hostname = "https://hotboxrf.ru";
const stream = new SitemapStream({ hostname });
const sitemapData = await streamToPromise(Readable.from(pages).pipe(stream));
const prettyXml = xmlFormatter(sitemapData.toString(), {
  indentation: "  ",
  collapseContent: true,
  lineSeparator: "\n",
});

writeFileSync("./public/sitemap.xml", prettyXml.toString());
console.log("✅ sitemap.xml created");
