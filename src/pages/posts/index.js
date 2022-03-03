import { gql } from "@apollo/client";
import { client } from "../../lib/apolloClient";
import PostsGrid from "../../components/PostsGrid";
import Head from "../../components/Head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PostPage = ({ posts }) => {
  return (
    <>
      <Head title="posts" />
      <Header />
      <PostsGrid posts={posts ? posts : []} first />
      <Footer />
    </>
  );
};

export default PostPage;

export async function getServerSideProps() {
  const response = await client.query({
    query: GET_POSTS,
  });

  return {
    props: { posts: response.data.posts?.nodes }, // will be passed to the page component as props
  };
}

const GET_POSTS = gql`
  query getPosts {
    posts {
      nodes {
        title
        uri
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;
