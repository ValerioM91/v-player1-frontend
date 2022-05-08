import styled from "styled-components";
import Component, { TDynamicProps } from "./Dynamic";

const Dynamic: React.FunctionComponent<TDynamicProps> = styled(Component)`
  min-height: 100vh;
  position: relative;
`;

export default Dynamic;
