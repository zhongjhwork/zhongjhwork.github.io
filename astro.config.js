import { defineConfig } from 'astro/config'
import { remarkReadingTime } from './src/plugins/remarkReadingTime'
import { rehypeCodeBlock } from './src/plugins/rehypeCodeBlock'
import { rehypeTableBlock } from './src/plugins/rehypeTableBlock'
import { rehypeCodeHighlight } from './src/plugins/rehypeCodeHighlight'
import { rehypeImage } from './src/plugins/rehypeImage'
import { rehypeLink } from './src/plugins/rehypeLink'
import { rehypeHeading } from './src/plugins/rehypeHeading'
import remarkDirective from 'remark-directive'
import { remarkSpoiler } from './src/plugins/remarkSpoiler'
import { remarkEmbed } from './src/plugins/remarkEmbed'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import { site } from './src/config.json'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

// https://astro.build/config
export default defineConfig({
  site: 'https://zhongjhwork.github.io',
  integrations: [tailwind(), react(), sitemap()],
  markdown: {
    syntaxHighlight: false,
    smartypants: false,
    remarkPlugins: [remarkMath, remarkDirective, remarkEmbed, remarkSpoiler, remarkReadingTime],
    rehypePlugins: [
      rehypeHeadingIds,
      rehypeKatex,
      rehypeLink,
      rehypeImage,
      rehypeHeading,
      rehypeCodeBlock,
      rehypeCodeHighlight,
      rehypeTableBlock,
    ],
    remarkRehype: { footnoteLabel: '参考', footnoteBackLabel: '返回正文' },
  },
})
