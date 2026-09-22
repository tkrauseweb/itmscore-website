import type { MetadataRoute } from "next";

const routes = [
  { path: "", priority: 1 },
  { path: "/portfolio", priority: .9 },
  { path: "/demo", priority: .8 },
  { path: "/referenz", priority: .8 },
  { path: "/produkt", priority: .7 },
  { path: "/loesungen", priority: .6 },
  { path: "/kontakt", priority: .5 },
  { path: "/impressum", priority: .2 },
  { path: "/datenschutz", priority: .2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `https://itmscore.de${path}`,
    changeFrequency: path === "" || path === "/portfolio" ? "monthly" : "yearly",
    priority,
  }));
}
