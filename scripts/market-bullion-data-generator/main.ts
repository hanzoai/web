import fs from 'fs-extra'

import { type Product, type Family } from '@hanzo/commerce/types'

import { type LeafImportData, type NodeImportData } from './types.ts'

import { OUT_DIR, OUT_FN, ROOT, SEP } from './config.ts'
import IMG from './IMG.ts' 

const families: Family[] = []

const amountStrFromItemToken = (t: string): string => {
  const tokens = t.split(SEP.subTok)
    // Must lower-case it because multibar tokens have an 'X' in them
  const amount = (tokens[0].includes(SEP.decimal) ? tokens[0].split(SEP.decimal).join('.') : tokens[0]).toLowerCase()
  const unit = tokens[1].toLowerCase() // OZ -> oz
  return amount + unit
}

const visitNode = (
  levelData: NodeImportData, 
  titleTokens: string[] = [],
  skuTokens: string[] = [], 
): void => {

  const levelTitle = levelData.titleToken ?? levelData.label
  const parentTitle = titleTokens.length > 0 ? titleTokens[titleTokens.length - 1] : undefined
  titleTokens.push(levelTitle)   

  skuTokens.push(levelData.tok)

  if (levelData.ch.length > 0 && 'price' in levelData.ch[0]) {

    const familyId = skuTokens.join(SEP.tok)

      // Since we are at the leaf level,
      // these are valid for the entire array.
    const bullionForm = titleTokens.pop()
    const previousTitle = titleTokens.filter((el) => (el.length > 0)).join(', ')

    const getSku = (prodTok: string) => (
      [...skuTokens, prodTok].join(SEP.tok)   
    )

        // from LeafImportData to hanzo/cart Product
    const hanzoProducts = (levelData.ch as LeafImportData[]).map(
      (prod) => ({
        id: getSku(prod.tok),
        sku: getSku(prod.tok), 

          // Desired result: "Lux Bullion, Gold, 1oz Minted Bar", ie,
          //  `<previous title tokens joined>, <amount> <form>`
        fullTitle: `${previousTitle}, ${amountStrFromItemToken(prod.tok)} ${bullionForm!}`,
        optionLabel: amountStrFromItemToken(prod.tok),
        familyTitle: bullionForm!,
        familyId: familyId,
        desc: prod.desc ? prod.desc : levelData.desc,
        price: 0,
          // @ts-ignore
        img: IMG[prod.imgCode ?? levelData.imgCode]   
      } satisfies Product)
    )

      // from NodeImportData to hanzo Family
    families.push({
      id: skuTokens.join(SEP.tok),
      title: levelTitle,
      parentTitle,
      desc: levelData.desc,
          // @ts-ignore
      img: IMG[levelData.imgCode],
      products: hanzoProducts
    } satisfies Family)
    
  }
  else if (levelData.ch.length > 0 && 'ch' in levelData.ch[0]) {

    const {imgCode: parentImg, desc: parentDesc} = levelData
    const subLevels = levelData.ch as NodeImportData[]
    
    subLevels.forEach(({tok, label, imgCode, desc, ch}) => {
      visitNode({
          tok,
          label,
          imgCode: imgCode ?? parentImg, 
          desc: desc ?? parentDesc,
          ch,
        } satisfies NodeImportData,
          // Each branch (ch levelData) must have it's own fresh copies to reduce
        [...titleTokens], 
        [...skuTokens]
      )
    })
  }
}

visitNode(ROOT as unknown as NodeImportData)

console.log(`Writing Family with their Products to ${OUT_DIR + OUT_FN}...`)
fs.writeJsonSync(
  OUT_DIR + OUT_FN, 
  families, 
  { spaces: 2 }
)
console.log('done')
