import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian, { obsidianSidebarEntries } from 'starlight-obsidian';

export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightObsidian({
          vault: './obsidian',
        }),
      ],
      title: 'CS Strats',
      sidebar: [
        {
          label: 'Notes',
          items: [obsidianSidebarEntries],
        },
      ],
    }),
  ],
});