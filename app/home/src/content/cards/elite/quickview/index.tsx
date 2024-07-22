import Row1Col1 from './row-1-column-1.mdx'
import Row1Col2 from './row-1-column-2.mdx'
import Row1Col3 from './row-1-column-3.mdx'
import Row1Col4 from './row-1-column-4.mdx'
import Row2Col1 from './row-2-column-1.mdx'
import Row2Col2 from './row-2-column-2.mdx'
import Row2Col3 from './row-2-column-3.mdx'

const row1: React.ReactNode[] = [
  <Row1Col1/>,
  <Row1Col2/>,
  <Row1Col3/>,
  <Row1Col4/>,
]

const row2 = [
  <Row2Col1/>,
  <Row2Col2/>,
  <Row2Col3/>,
]

export {
  row1,
  row2
}