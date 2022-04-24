import { motion } from "framer-motion";
import styled from "styled-components";
import useDarkThemeContext from "../../context/DarkThemeContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

function ThemeToggler({ className }) {
  const { darkTheme, toggleTheme } = useDarkThemeContext();

  return (
    <Wrapper darkTheme={darkTheme} onClick={toggleTheme} className={className}>
      <BsFillMoonFill className="icon moon" />
      <BsFillSunFill className="icon sun" />
      <motion.div className="handle" layout transition={spring} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 5.6rem;
  height: 3rem;
  background-color: ${({ darkTheme, theme }) =>
    darkTheme ? theme.colors.primaryBlue : theme.colors.primaryYellow};
  display: flex;
  justify-content: ${({ darkTheme }) =>
    darkTheme ? "flex-end" : "flex-start"};
  border-radius: 5rem;
  padding: 0.5rem;
  cursor: pointer;
  position: relative;

  .icon {
    height: 1.8rem;
    top: 0.6rem;
    position: absolute;
    width: auto;
    color: ${({ theme }) => theme.colors.white};
  }

  .moon {
    left: 0.6rem;
  }

  .sun {
    right: 0.6rem;
  }

  .handle {
    width: 2rem;
    height: 2rem;
    background-color: white;
    border-radius: 4rem;
    z-index: 1;
  }

  @media ${({ theme }) => theme.device.mdDown} {
    width: 4.48rem;
    height: 2.4rem;

    .icon {
      height: 1.2rem;
      width: 1.2rem;
    }

    .handle {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
`;

export default ThemeToggler;
