export const GET_REVIEWS = `
    reviews {
      nodes {
        slug
        date
        excerpt
        title
        reviewFields {
          vote
          hero {
            sourceUrl
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
`;

export const GET_MAIN_MENU = `
   menu(id: "Main Menu", idType: NAME) {
     menuItems {
       nodes {
         path
         label
         cssClasses
       }
     }
   }
`;

export const GET_GLOBALS = `
globals {
  socials {
    facebook
    instagram
    psn
    steam
  }
  logos {
    logo
    logoBlue
  }
  contactDetails {
    contactAddress
    contactEmail
    contactPhone
    contactPostcode
  }
}
`;
