import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";
import { Readable } from "stream";
import xmlFormatter from "xml-formatter";
import { boilers } from "data";

const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },

  { url: "/news", changefreq: "monthly", priority: 0.8 },
  { url: "/car", changefreq: "monthly", priority: 0.8 },
  { url: "/service", changefreq: "monthly", priority: 0.8 },
  { url: "/boiler-room", changefreq: "monthly", priority: 0.8 },
  { url: "/privacy", changefreq: "monthly", priority: 0.8 },
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
