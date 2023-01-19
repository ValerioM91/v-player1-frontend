import Static from "../layouts/Static";
import { FormEvent, useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { client } from "../lib/apolloClient";
import { GET_MAIN_MENU } from "../lib/requests";
import createMenuItemArray from "../utils/createMenuItemArray";
import useStore from "../store";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { trackSignUp, trackSignUpPageViewed } from "../utils/MixPanel";

export default function Login({ menuItems }) {
  const setMainMenu = useStore((state) => state.setMainMenu);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [premium, setPremium] = useState(false);
  const router = useRouter();
  const { setIsLoggedIn, setPlanType, planType } = useStore();

  useEffect(() => {
    setMainMenu(menuItems);
    trackSignUpPageViewed();
  }, []);

  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Please insert valid credentials");
    } else {
      alert("You are now logged in");
      trackSignUp({ name, email, premium });
      setPlanType(premium ? "Premium" : "Free");
      setIsLoggedIn(true);
      router.push("/");
    }
  };

  return (
    <Static pageTitle="Sign Up">
      <Container className="container container--small">
        <Heading
          heading="Sign Up"
          headingType="h1"
          size="headingMedium"
          alignment="center"
          className="review-heading"
          borderBottom
          afterLine
        />
        <form onSubmit={loginHandler} className="form">
          <div className="form-control">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input
              className="form-input"
              type="name"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input
              className="form-input"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="password">
              Password:
            </label>
            <input
              className="form-input"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="password">
              Premium:
            </label>
            <input
              type="checkbox"
              name="premium"
              id="premium"
              checked={premium}
              onChange={(e) => {
                setPremium(e.target.checked);
              }}
            />
          </div>
          <Button type="submit" variant="primary">
            Sign Up
          </Button>
        </form>
      </Container>
    </Static>
  );
}

export const getStaticProps = async () => {
  const response = await client.query({
    query: QUERY,
  });

  const menuItems = createMenuItemArray(response?.data?.menu?.menuItems?.nodes);

  const props = {
    menuItems,
  };

  return {
    props,
  };
};

const QUERY = gql` {
    ${GET_MAIN_MENU}
}
`;
