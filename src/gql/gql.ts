/* eslint-disable */
import * as types from "./graphql"
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  fragment AllPagesQuery on RootQuery {\n    globals {\n      ...GlobalsQuery\n    }\n    reviews {\n      nodes {\n        ...ReviewQuery\n      }\n    }\n    menu(id: "Main Menu", idType: NAME) {\n      ...MainMenuQuery\n    }\n  }\n':
    types.AllPagesQueryFragmentDoc,
  '\n  query HomePageQuery {\n    page(id: "/", idType: URI) {\n      title\n      ...PageBlocksFields\n    }\n    ...AllPagesQuery\n  }\n':
    types.HomePageQueryDocument,
  "\n  query PageQuery($uri: ID!) {\n    page(id: $uri, idType: URI) {\n      slug\n      title\n      pageFields {\n        description\n      }\n      ...PageBlocksFields\n    }\n    ...AllPagesQuery\n  }\n":
    types.PageQueryDocument,
  "\n  query ReviewPageQuery($slug: ID!) {\n    review(id: $slug, idType: SLUG) {\n      title\n      excerpt\n      reviewFields {\n        vote\n        hero {\n          sourceUrl\n        }\n      }\n      ...ReviewBlocksFields\n    }\n    ...AllPagesQuery\n  }\n":
    types.ReviewPageQueryDocument,
  "\n  query PagePathsQuery {\n    pages {\n      nodes {\n        uri\n      }\n    }\n  }\n":
    types.PagePathsQueryDocument,
  "\n  query ReviewsPathsQuery {\n    reviews {\n      nodes {\n        slug\n      }\n    }\n  }\n":
    types.ReviewsPathsQueryDocument,
  "\n  fragment GlobalsQuery on Global {\n    socials {\n      facebook\n      instagram\n      psn\n      steam\n    }\n  }\n":
    types.GlobalsQueryFragmentDoc,
  "\n  fragment MainMenuQuery on Menu {\n    menuItems {\n      nodes {\n        label\n        path\n        cssClasses\n      }\n    }\n  }\n":
    types.MainMenuQueryFragmentDoc,
  "\n  fragment PageBlocksFields on Page {\n    blocks {\n      ...BlocksQuery\n    }\n  }\n":
    types.PageBlocksFieldsFragmentDoc,
  "\n  fragment ReviewBlocksFields on Review {\n    blocks {\n      ...BlocksQuery\n    }\n  }\n":
    types.ReviewBlocksFieldsFragmentDoc,
  "\n  fragment ReviewQuery on Review {\n    slug\n    date\n    excerpt\n    title\n    reviewFields {\n      vote\n      hero {\n        sourceUrl\n      }\n    }\n    featuredImage {\n      node {\n        altText\n        sourceUrl\n      }\n    }\n  }\n":
    types.ReviewQueryFragmentDoc,
  "\n  fragment BlocksQuery on Block {\n    ...AboutSectionQuery\n    ...FinalCommentSectionQuery\n    ...FullImageSectionQuery\n    ...HeadingContentSectionQuery\n    ...HeroSectionQuery\n    ...ReviewsSectionQuery\n  }\n":
    types.BlocksQueryFragmentDoc,
  "\n  fragment AboutSectionQuery on AcfAbout001Block {\n    fields: aboutMe {\n      content\n      heading\n      headingType\n      image {\n        sourceUrl\n        altText\n      }\n    }\n  }\n":
    types.AboutSectionQueryFragmentDoc,
  "\n  fragment FinalCommentSectionQuery on AcfFinalComment1Block {\n    fields: finalComment1 {\n      heading\n      headingType\n      content\n    }\n  }\n":
    types.FinalCommentSectionQueryFragmentDoc,
  "\n  fragment FullImageSectionQuery on AcfFullImage1Block {\n    fields: fullImage {\n      image {\n        altText\n        sourceUrl\n      }\n    }\n  }\n":
    types.FullImageSectionQueryFragmentDoc,
  "\n  fragment HeadingContentSectionQuery on AcfHeadingContent1Block {\n    fields: headingContent1 {\n      heading\n      headingType\n      contents {\n        content\n        image {\n          altText\n          sourceUrl\n        }\n      }\n    }\n  }\n":
    types.HeadingContentSectionQueryFragmentDoc,
  "\n  fragment HeroSectionQuery on AcfHeroImage001Block {\n    fields: heroImage001 {\n      headingType\n      heading\n      backgroundImage {\n        sourceUrl\n        altText\n      }\n    }\n  }\n":
    types.HeroSectionQueryFragmentDoc,
  "\n  fragment ReviewsSectionQuery on AcfReviews001Block {\n    fields: reviews001 {\n      first\n      latest\n      headingType\n      heading\n      buttonType\n      label\n      linkUrl\n    }\n  }\n":
    types.ReviewsSectionQueryFragmentDoc,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment AllPagesQuery on RootQuery {\n    globals {\n      ...GlobalsQuery\n    }\n    reviews {\n      nodes {\n        ...ReviewQuery\n      }\n    }\n    menu(id: "Main Menu", idType: NAME) {\n      ...MainMenuQuery\n    }\n  }\n',
): (typeof documents)['\n  fragment AllPagesQuery on RootQuery {\n    globals {\n      ...GlobalsQuery\n    }\n    reviews {\n      nodes {\n        ...ReviewQuery\n      }\n    }\n    menu(id: "Main Menu", idType: NAME) {\n      ...MainMenuQuery\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query HomePageQuery {\n    page(id: "/", idType: URI) {\n      title\n      ...PageBlocksFields\n    }\n    ...AllPagesQuery\n  }\n',
): (typeof documents)['\n  query HomePageQuery {\n    page(id: "/", idType: URI) {\n      title\n      ...PageBlocksFields\n    }\n    ...AllPagesQuery\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query PageQuery($uri: ID!) {\n    page(id: $uri, idType: URI) {\n      slug\n      title\n      pageFields {\n        description\n      }\n      ...PageBlocksFields\n    }\n    ...AllPagesQuery\n  }\n",
): (typeof documents)["\n  query PageQuery($uri: ID!) {\n    page(id: $uri, idType: URI) {\n      slug\n      title\n      pageFields {\n        description\n      }\n      ...PageBlocksFields\n    }\n    ...AllPagesQuery\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query ReviewPageQuery($slug: ID!) {\n    review(id: $slug, idType: SLUG) {\n      title\n      excerpt\n      reviewFields {\n        vote\n        hero {\n          sourceUrl\n        }\n      }\n      ...ReviewBlocksFields\n    }\n    ...AllPagesQuery\n  }\n",
): (typeof documents)["\n  query ReviewPageQuery($slug: ID!) {\n    review(id: $slug, idType: SLUG) {\n      title\n      excerpt\n      reviewFields {\n        vote\n        hero {\n          sourceUrl\n        }\n      }\n      ...ReviewBlocksFields\n    }\n    ...AllPagesQuery\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query PagePathsQuery {\n    pages {\n      nodes {\n        uri\n      }\n    }\n  }\n",
): (typeof documents)["\n  query PagePathsQuery {\n    pages {\n      nodes {\n        uri\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query ReviewsPathsQuery {\n    reviews {\n      nodes {\n        slug\n      }\n    }\n  }\n",
): (typeof documents)["\n  query ReviewsPathsQuery {\n    reviews {\n      nodes {\n        slug\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment GlobalsQuery on Global {\n    socials {\n      facebook\n      instagram\n      psn\n      steam\n    }\n  }\n",
): (typeof documents)["\n  fragment GlobalsQuery on Global {\n    socials {\n      facebook\n      instagram\n      psn\n      steam\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment MainMenuQuery on Menu {\n    menuItems {\n      nodes {\n        label\n        path\n        cssClasses\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment MainMenuQuery on Menu {\n    menuItems {\n      nodes {\n        label\n        path\n        cssClasses\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment PageBlocksFields on Page {\n    blocks {\n      ...BlocksQuery\n    }\n  }\n",
): (typeof documents)["\n  fragment PageBlocksFields on Page {\n    blocks {\n      ...BlocksQuery\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment ReviewBlocksFields on Review {\n    blocks {\n      ...BlocksQuery\n    }\n  }\n",
): (typeof documents)["\n  fragment ReviewBlocksFields on Review {\n    blocks {\n      ...BlocksQuery\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment ReviewQuery on Review {\n    slug\n    date\n    excerpt\n    title\n    reviewFields {\n      vote\n      hero {\n        sourceUrl\n      }\n    }\n    featuredImage {\n      node {\n        altText\n        sourceUrl\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment ReviewQuery on Review {\n    slug\n    date\n    excerpt\n    title\n    reviewFields {\n      vote\n      hero {\n        sourceUrl\n      }\n    }\n    featuredImage {\n      node {\n        altText\n        sourceUrl\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment BlocksQuery on Block {\n    ...AboutSectionQuery\n    ...FinalCommentSectionQuery\n    ...FullImageSectionQuery\n    ...HeadingContentSectionQuery\n    ...HeroSectionQuery\n    ...ReviewsSectionQuery\n  }\n",
): (typeof documents)["\n  fragment BlocksQuery on Block {\n    ...AboutSectionQuery\n    ...FinalCommentSectionQuery\n    ...FullImageSectionQuery\n    ...HeadingContentSectionQuery\n    ...HeroSectionQuery\n    ...ReviewsSectionQuery\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment AboutSectionQuery on AcfAbout001Block {\n    fields: aboutMe {\n      content\n      heading\n      headingType\n      image {\n        sourceUrl\n        altText\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment AboutSectionQuery on AcfAbout001Block {\n    fields: aboutMe {\n      content\n      heading\n      headingType\n      image {\n        sourceUrl\n        altText\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment FinalCommentSectionQuery on AcfFinalComment1Block {\n    fields: finalComment1 {\n      heading\n      headingType\n      content\n    }\n  }\n",
): (typeof documents)["\n  fragment FinalCommentSectionQuery on AcfFinalComment1Block {\n    fields: finalComment1 {\n      heading\n      headingType\n      content\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment FullImageSectionQuery on AcfFullImage1Block {\n    fields: fullImage {\n      image {\n        altText\n        sourceUrl\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment FullImageSectionQuery on AcfFullImage1Block {\n    fields: fullImage {\n      image {\n        altText\n        sourceUrl\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment HeadingContentSectionQuery on AcfHeadingContent1Block {\n    fields: headingContent1 {\n      heading\n      headingType\n      contents {\n        content\n        image {\n          altText\n          sourceUrl\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment HeadingContentSectionQuery on AcfHeadingContent1Block {\n    fields: headingContent1 {\n      heading\n      headingType\n      contents {\n        content\n        image {\n          altText\n          sourceUrl\n        }\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment HeroSectionQuery on AcfHeroImage001Block {\n    fields: heroImage001 {\n      headingType\n      heading\n      backgroundImage {\n        sourceUrl\n        altText\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment HeroSectionQuery on AcfHeroImage001Block {\n    fields: heroImage001 {\n      headingType\n      heading\n      backgroundImage {\n        sourceUrl\n        altText\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment ReviewsSectionQuery on AcfReviews001Block {\n    fields: reviews001 {\n      first\n      latest\n      headingType\n      heading\n      buttonType\n      label\n      linkUrl\n    }\n  }\n",
): (typeof documents)["\n  fragment ReviewsSectionQuery on AcfReviews001Block {\n    fields: reviews001 {\n      first\n      latest\n      headingType\n      heading\n      buttonType\n      label\n      linkUrl\n    }\n  }\n"]

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never
