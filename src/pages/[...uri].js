import { gql } from "@apollo/client";
import { client } from "../lib/apolloClient";
import { BLOCKS_FRAGMENT } from "../utils/Blocks";
import Dynamic from "../layouts/Dynamic";

export default function page({ page }) {
  return <Dynamic {...page} header />;
}

export const getStaticProps = async (context) => {
  const uri = context.params.uri.join("/");
  const page = await client.query({
    query: GET_PAGE,
    variables: { uri },
  });

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

  const uris = pages
    .map((page) => page.uri.split("/").filter(Boolean))
    .filter((uri) => uri.length);
  const paths = uris.map((uri) => ({ params: { uri } }));
  return {
    paths,
    fallback: false,
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
      ...PageBlocksFields
    }
  }
  ${BLOCKS_FRAGMENT}
`;
