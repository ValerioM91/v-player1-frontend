export const AboutQuery = `
... on AcfAbout001Block {
  fields: aboutMe {
    content
    heading
    headingType
    image {
      sourceUrl
      altText
    }
  }
}`
