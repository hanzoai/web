interface LeafImportData {
  tok: string
  imgCode?: string
  desc?: string
}

interface NodeImportData {
  tok: string
  titleToken?: string
  label: string
  imgCode?: string
  desc?: string
  ch: NodeImportData[] | LeafImportData[]
}

export {
  type LeafImportData,
  type NodeImportData
}