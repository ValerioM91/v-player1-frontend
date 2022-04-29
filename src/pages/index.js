import { useEffect } from "react";
import { gql } from "@apollo/client";
import { client } from "../lib/apolloClient";
import { BLOCKS_FRAGMENT } from "../utils/Blocks";
import Dynamic from "../layouts/Dynamic";
import { GET_REVIEWS, GET_MAIN_MENU, GET_GLOBALS } from "../lib/requests";
import createMenuItemArray from "../utils/createMenuItemArray";
import useAssetsContext from "../context/AssetsContext";

export default function Home(props) {
  const { setGlobals, setMainMenu, setReviews } = useAssetsContext();

  useEffect(() => {
    setGlobals(props.globals);
    setMainMenu(props.menuItems);
    setReviews(props.reviews);
  }, []);

  return <Dynamic {...props} />;
}

export const getStaticProps = async () => {
  const response = await client.query({
    query: HOMEPAGE_QUERY,
  });

  const reviews = response?.data?.reviews?.nodes;
  const menuItems = createMenuItemArray(response?.data?.menu?.menuItems?.nodes);
  const globals = response?.data?.globals;

  const props = {
    ...response?.data?.page,
    reviews,
    menuItems,
    globals,
  };

  return {
    props,
  };
};

const HOMEPAGE_QUERY = gql`
  {
    page(id: "/", idType: URI) {
      title
      ...PageBlocksFields
    }
    ${GET_REVIEWS}
    ${GET_MAIN_MENU}
    ${GET_GLOBALS}
  }
  ${BLOCKS_FRAGMENT}
`;
