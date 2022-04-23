import { gql } from "@apollo/client";
import { client } from "../lib/apolloClient";
import { BLOCKS_FIELD } from "../utils/Blocks";
import Dynamic from "../layouts/Dynamic";

export default function page({ page }) {
  return <Dynamic {...page} />;
}

export const getStaticProps = async (context) => {
  const uri = context.params.uri;
  const page = await client.query({
    query: GET_PAGE,
    variables: { uri },
  });

  if (!page.data.page.slug) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page: page?.data?.page,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await client.query({
    query: GET_PAGES,
  });

  const pages = response?.data?.pages?.nodes;
  const uris = pages.map((page) => page.uri);
  const paths = uris.map((uri) => ({ params: { uri: uri } }));

  return {
    paths,
    fallback: "blocking",
  };
};

const GET_PAGES = gql`
  query allPages {
    pages {
      nodes {
        uri
      }
    }
  }
`;

const GET_PAGE = gql`
  query getPage($uri: ID!) {
    page(id: $uri, idType: URI) {
      slug
      title
      pageFields {
        description
      }
      ...PageBlocksField
    }
  }
  ${BLOCKS_FIELD}
`;
