interface CaseStudyType {
    id: number,
    title: string
    title_description: string
    description: string
    full_description: string[]
    overview_image: string
    individual_image: string
    strategy: string[]
    result: string[] | null
    next: number
    reverse: boolean
  }
  
  export {
    type CaseStudyType,
  }
  