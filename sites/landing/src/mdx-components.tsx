import type { MDXComponents } from 'mdx/types'
import { MDXLink } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
 
// https://nextjs.org/docs/pages/building-your-application/configuring/mdx

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => (
      <MDXLink {...props}/>
    ),
    hr: ({className, ...rest}) => (
      <hr className={cn('w-5/6 h-[1px] text-current', className)} {...rest} />
    ),
    ...components,
  }
}