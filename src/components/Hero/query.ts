export const HeroQuery = `
... on AcfHeroImage001Block {
  fields: heroImage001 {
    headingType
    heading
    backgroundImage {
      sourceUrl
      altText 
    }
  }
}`
