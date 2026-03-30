import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig, mainSiteUrl } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2 uppercase tracking-[0.22em]">
          <span className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[11px] font-bold">
            Sure
          </span>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-white/60 md:inline-block" />
          <span className="text-[11px] font-semibold text-zinc-400">{appName}</span>
        </div>
      ),
      url: '/',
      transparentMode: 'top',
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        type: 'main',
        text: 'Docs',
        url: '/docs',
        active: 'nested-url',
      },
      {
        type: 'main',
        text: 'Sure Store',
        url: mainSiteUrl,
        external: true,
      },
    ],
    themeSwitch: {
      enabled: false,
    },
  };
}
