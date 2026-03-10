import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

export async function parseMarkdown(content: string) {
  const result = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkBreaks],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
              properties: { className: ["anchor"] },
            },
          ],
          [
            rehypePrettyCode,
            {
              theme: "github-light",
              keepBackground: false,
              defaultLang: "plaintext",
            },
          ],
        ],
      },
    },
  });

  return result;
}
