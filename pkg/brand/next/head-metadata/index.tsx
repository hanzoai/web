import React from 'react'

import type { Metadata } from 'next'
import Head from "next/head"

import type {
  IconDescriptor,
  TemplateString,
  Author,
  ThemeColorDescriptor
} from './from-next/metadata-types'

import type { OpenGraph, OGImage } from './from-next/opengraph-types'
import type { Twitter, TwitterImage } from './from-next/twitter-types'

/*
  NOTE: This is ONLY for sites that use the pages router in next.  
  The app router does this automatically
*/

const getURLasString = (url: string | URL) => {
  return (
    (typeof url === 'string') ? (url as string) : (url.href)  
  )
}

  // https://stackoverflow.com/questions/68746228/next-head-wont-render-meta-tags-inside-of-fragment
const Icons: React.FC<{icons: IconDescriptor[]}> = ({
  icons
}) => {
  return <Head>
  {icons.map(({url, ...rest}: IconDescriptor, index) => (
    <link {...rest} href={getURLasString(url)} key={`icons-${index}`}/>
  ))}
  </Head>
}

export const getTitleFromTemplateString = (title: string | TemplateString | null | undefined): string | null  => {

  if (!title) {
    return null
  }
  if (typeof title === 'object') {
    if ('default' in title) {
      return  title.default
    }
    else if ('absolute' in title) {
      return title.absolute
    }
  }
  return title as string
}

const Authors: React.FC<{
  authors: null | undefined | Author | Array<Author>
}> = ({
  authors
}) => {

  const Author: React.FC<{author: Author}> = ({author}) => (<>
    {author.name && <meta name="author" content={author.name}  />}
    {author.url && <link rel="author" href={getURLasString(author.url)}/>}
  </>)

  if (!authors) {
    return null
  }

  if (Array.isArray(authors)) {
    return (<>
      {authors.map((el: Author, index) => (
        <Author author={el} key={`authors-${index}`} /> 
      ))}
    </>)
  }
  return (<Author author={authors as Author} />) 
}

const Keywords: React.FC<{keywords: undefined | null | string | Array<string>}> = ({
  keywords 
}) => {
  if (!keywords) return null
  const content = (Array.isArray(keywords) ? keywords.join(', ') : keywords as string)
  return (<meta name="keywords" content={content} />)
}

const ThemeColor: React.FC<{
  thColors: null | undefined | string | ThemeColorDescriptor | ThemeColorDescriptor[]
}> = ({
  thColors
}) => {

  const ThColor: React.FC<{thColor: ThemeColorDescriptor}> = ({thColor}) => {
    const toSpread: any = {
      content: thColor.color
    }

    if ('media' in thColor) {
      toSpread.media = thColor.media
    }

    return <meta name="theme-color" {...toSpread}/>
  }

  if (!thColors) {
    return null
  }

  if (Array.isArray(thColors)) {
    return (<>
      {thColors.map((el: ThemeColorDescriptor, index) => (
        <ThColor thColor={el} key={`theme-colors-${index}`} /> 
      ))}
    </>)
  }
  else if (typeof thColors === 'string') {
    <meta name="theme-color" content={thColors as string}/> 
  }
  return (<ThColor thColor={thColors as ThemeColorDescriptor} />) 
}

const Manifest: React.FC<{
  manifest: undefined | null | string | URL
}> = ({
  manifest
}) => (
  manifest && (<link rel="manifest" href={getURLasString(manifest)}/>)
)

const getOGImageURL = (img: OGImage | undefined): string | null => {

  if (!img) {
    return null
  }
  if (typeof img === 'object' && 'url' in img) { // this is a OGImageDescriptor
    return getURLasString(img.url)
  }
  return getURLasString(img) // this is a URL or string
}

const getTwitterImageURL = (img: TwitterImage | undefined): string | null => {

  if (!img) {
    return null
  }
  if (typeof img === 'object' && 'url' in img) { // this is a TwitterImageDescriptor
    return getURLasString(img.url)
  }
  return getURLasString(img) // this is a URL or string
}

  // https://stackoverflow.com/questions/68746228/next-head-wont-render-meta-tags-inside-of-fragment
const OpenGraphComponent: React.FC<{
  og: OpenGraph | undefined | null
}> = ({
  og 
}) => (og && (<Head>
  {og.url && (<meta property="og:url" content={(typeof og.url === 'string') ? (og.url as string) : (og.url.href)} />)}
  {(og as any).type && (<meta property="og:type" content={(og as any).type} />)}
  {og.title && (<meta property="og:title" content={getTitleFromTemplateString(og.title)!} />)}
  {og.description && (<meta property="og:description" content={og.description} />)}
  {og.images && (<meta property="og:image" content={getOGImageURL(Array.isArray(og.images) ? og.images[0] : og.images)!} />)}
</Head>))

  // https://stackoverflow.com/questions/68746228/next-head-wont-render-meta-tags-inside-of-fragment
export const TwitterComponent: React.FC<{
  tw: Twitter | undefined | null
}> = ({
  tw 
}) => (tw && (<Head>
  {(tw as any).card && (<meta name="twitter:card" content={(tw as any).card} />)}
  {tw.title && (<meta name="twitter:title" content={getTitleFromTemplateString(tw.title)!} />)}
  {tw.description && (<meta name="twitter:description" content={tw.description} />)}
  {tw.images && (<meta name="twitter:image" content={getTwitterImageURL(Array.isArray(tw.images) ? tw.images[0] : tw.images)!} />)}
  {tw.site && (<meta name="twitter:site" content={tw.site} />)}
</Head>))

  /* See NOTE at top of file! */
  // https://stackoverflow.com/questions/68746228/next-head-wont-render-meta-tags-inside-of-fragment
const HeadMetadataComponent: React.FC<{
  metadata: Metadata
}> = ({
  metadata
}) => {
  const mainTitle = getTitleFromTemplateString(metadata.title)

  return (<>
    <Head>
      {mainTitle && (<title>{mainTitle}</title>) /* must be here, directly under Head component */}
      {metadata.description && (      
        <meta name="description" content={metadata.description} />
      )}
      {metadata.applicationName && (      
        <meta name="application-name" content={metadata.applicationName} />
      )}
      <Authors authors={metadata.authors} />
      <Keywords keywords={metadata.keywords} />
      <ThemeColor thColors={metadata.themeColor} />
      <Manifest manifest={metadata.manifest} />
    </Head>
      {/* Icons: We only support this format for now */}
    <Icons icons={metadata.icons as IconDescriptor[]} />
    <OpenGraphComponent og={metadata.openGraph} />
    <TwitterComponent tw={metadata.twitter} />
  </>)
}

export default HeadMetadataComponent
