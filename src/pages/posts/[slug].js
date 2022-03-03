import { gql } from "@apollo/client";
import { client } from "../../lib/apolloClient";
import { POSTS_BLOCKS_FIELD } from "../../utils/Blocks";
import Post from "../../layouts/Post";

const PostPage = ({ post }) => {
  return <Post {...post} />;
};

export default PostPage;

export async function getServerSideProps(context) {
  const slug = context.params.slug;
  const response = await client.query({
    query: GET_POST,
    variables: { slug },
  });

  if (!response.data.post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post: response.data.post },
  };
}

const GET_POST = gql`
  query getPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      excerpt
      ...PostBlocksFields
    }
  }
  ${POSTS_BLOCKS_FIELD}
`;
