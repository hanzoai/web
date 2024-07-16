# web

## Dev: run locally

Install `pnpm` [like so](https://pnpm.io/installation) and use `pnpm install`
and `pnpm dev` to run the local development server:

```
pnpm install
cd app/<credit,finance,market,etc..>
pnpm dev
```

Since "pnpm" is a finger twister, many people alias it to "pn". For example, with `bash`, put `alias pn='pnpm'` in `.bashrc`.

## Architecture

- Next.js 14
- Radix UI Primitives
- Tailwind CSS
- Icons from [Lucide](https://lucide.dev)
- Dark mode with `next-themes`

## Built on the Hanzo React SDK (@hanzo/ui, @hanzo/auth, @hanzo/commerce)

- A potent React framework using Next 14, Tailwind and Radix
- Renders most content from simple 'Block' definitions (in `/src/content` )
- Lives [on GitHub here](https://github.com/hanzoai/react-sdk)
