export const ReviewsQuery = `
... on AcfReviews001Block {
  fields: reviews001 {
    first
    latest
    headingType
    heading
    buttonType
    label
    linkUrl
  }
}`
