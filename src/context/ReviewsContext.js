import React, { useContext, createContext, useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { client } from "../lib/apolloClient";

const ReviewsContext = createContext();

export const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);

  const getReviews = async () => {
    setIsLoadingReviews(true);
    try {
      const response = await client.query({
        query: GET_REVIEWS,
      });

      const reviews = response?.data?.reviews?.nodes;

      setReviews(reviews);

      setIsLoadingReviews(false);
    } catch (err) {
      console.error("error on reviews loading");
      console.error(err);
      // add error handling
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <ReviewsContext.Provider value={{ reviews, isLoadingReviews }}>
      {children}
    </ReviewsContext.Provider>
  );
};

const GET_REVIEWS = gql`
  query AllReviewsQuery {
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
      }
    }
  }
`;

const useReviewsContext = () => useContext(ReviewsContext);
export default useReviewsContext;
