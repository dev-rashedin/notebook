import fs from "fs/promises";
import path from "path";
import DisplayContent from "@/components/DisplayContent";


export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
   const baseDir = path.join(process.cwd(), 'src', 'docs', 'case-studies');

  // recursively walk the docs/case-studies directory
  async function getAllMdxFiles(
    dir: string,
    prefix: string[] = [],
  ): Promise<{ slug: string[] }[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const result: { slug: string[] }[] = [];

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        const nested = await getAllMdxFiles(fullPath, [...prefix, entry.name]);
        result.push(...nested);
      } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
        const slugName = entry.name.replace(/\.mdx$/, "");
        result.push({ slug: [...prefix, slugName] });
      }
    }

    return result;
  }

  return getAllMdxFiles(baseDir);
}

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const slugPath = slug.join("/"); // e.g. "express/express-basic-ts"

  return <DisplayContent endpoint="case-studies" slug={slugPath} />;
}
