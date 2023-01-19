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
import { trackLogin } from "../utils/MixPanel";

export default function Login({ menuItems }) {
  const setMainMenu = useStore((state) => state.setMainMenu);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setIsLoggedIn, planType } = useStore();

  useEffect(() => {
    setMainMenu(menuItems);
  }, []);

  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Please insert valid credentials");
    } else {
      alert("You are now logged in");
      trackLogin(email, planType);
      setIsLoggedIn(true);
      router.push("/");
    }
  };

  return (
    <Static pageTitle="Login">
      <Container className="container container--small">
        <Heading
          heading="Login"
          headingType="h1"
          size="headingMedium"
          alignment="center"
          className="review-heading"
          borderBottom
          afterLine
        />
        <form onSubmit={loginHandler} className="form">
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
          <Button type="submit" variant="primary">
            Login
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
