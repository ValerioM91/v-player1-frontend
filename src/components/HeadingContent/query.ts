export const HeadingContentQuery = `
... on AcfHeadingContent1Block {
    fields: headingContent1 {
        heading
        headingType
        contents {
            content
            image {
              altText
              sourceUrl
            }
        }
    }
}`
