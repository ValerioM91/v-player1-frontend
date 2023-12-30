import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import styled, { css } from "styled-components"
import useStore from "../../store"

const externalPathVariants = {
  initial: {
    pathLength: 0,
    fill: "#0071BC00",
  },
  animate: {
    pathLength: 1,
    fill: "#0071BC",
    transition: {
      default: { duration: 1, ease: "easeIn" },
      fill: { duration: 0.75, delay: 1 },
    },
  },
}

const buttonVariants = (delay: number) => ({
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, delay, ease: "easeInOut" },
  },
  bounceInitial: {
    opacity: 1,
    scale: 1,
  },
  bounceAnimate: {
    opacity: 1,
    scale: [1, 0.9, 1.02, 1],
    transition: {
      duration: 0.2,
      delay,
      ease: "easeInOut",
    },
  },
})

function IntroAnimation() {
  const { introCompleted, setIntroCompleted } = useStore()
  const { darkTheme } = useStore()

  const [firstAnimationCompleted, setFirstAnimationCompleted] = useState(false)

  const [windowHeight, setWindowHeight] = useState(null)

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    if (!windowHeight) return
    const vh = windowHeight * 0.01
    document.documentElement.style.setProperty("--viewHeight", `${vh}px`)
  }, [windowHeight])

  useEffect(() => {
    const onResize = () => {
      setWindowHeight(window.innerHeight)
    }
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("resize", onResize)
    }
  })

  const buttonProps = useCallback(
    (delay: number, increment: number) => {
      return {
        variants: firstAnimationCompleted ? buttonVariants(increment) : buttonVariants(delay + increment),
        initial: firstAnimationCompleted ? "bounceInitial" : "initial",
        animate: firstAnimationCompleted ? "bounceAnimate" : "animate",
      }
    },
    [firstAnimationCompleted],
  )

  return (
    <Wrapper hide={introCompleted} darkTheme={darkTheme}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="108"
        viewBox="0 0 488 258"
        initial="initial"
        animate="animate"
      >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g transform="translate(-56 -283)">
            <g transform="rotate(-90 298.446 242.428)">
              <motion.path
                fill="#F3C400"
                {...buttonProps(1.7, 0)}
                d="M80.545 340.822c-9.84 0-17.816 7.976-17.816 17.815 0 9.84 7.977 17.815 17.816 17.815 9.839 0 17.815-7.975 17.815-17.815 0-9.839-7.976-17.815-17.815-17.815"
              ></motion.path>
              <motion.path
                fill="#EB4B36"
                {...buttonProps(1.7, 0.2)}
                d="M110.84 406.748c0 9.839 7.976 17.815 17.815 17.815 9.839 0 17.816-7.976 17.816-17.815 0-9.84-7.977-17.816-17.816-17.816-9.84 0-17.816 7.977-17.816 17.816"
              ></motion.path>
              <motion.path
                fill="#04A384"
                {...buttonProps(1.7, 0.4)}
                d="M146.47 310.527c0-9.84-7.976-17.816-17.815-17.816-9.84 0-17.816 7.977-17.816 17.816 0 9.839 7.977 17.815 17.816 17.815 9.839 0 17.816-7.976 17.816-17.815"
              ></motion.path>
              <motion.path
                fill="#0071BC"
                {...buttonProps(1.7, 0.6)}
                onAnimationComplete={() => {
                  if (firstAnimationCompleted) return setIntroCompleted(true)
                  setTimeout(() => setFirstAnimationCompleted(true), 300)
                }}
                d="M176.766 376.453c9.839 0 17.815-7.977 17.815-17.816 0-9.84-7.976-17.815-17.815-17.815-9.84 0-17.816 7.976-17.816 17.815 0 9.84 7.976 17.816 17.816 17.816"
              ></motion.path>
              <motion.path
                stroke="#0071BC"
                strokeWidth="3"
                d="M128.5 257.3C199.6 257.3 257.3 199.6 257.3 128.5 257.3 57.7 199.6 0 128.5 0S0 57.7 0 128.5C0 161.9 12.6 193.4 35.5 217.4L55.3 198.6C37.3 179.6 27.3 154.8 27.3 128.5 27.3 72.8 72.8 27.3 128.5 27.3 184.5 27.3 230 72.8 230 128.5S184.5 230 128.5 230"
                variants={externalPathVariants}
              />
              <motion.path
                stroke="#0071BC"
                strokeWidth="3"
                d="M129 230C57.7 230 0 287.7 0 358.6 0 429.6 57.7 487.3 129 487.3S257.3 429.6 257.3 358.6C257.3 325.4 244.7 293.9 221.8 269.9L202 288.7C220 307.6 230 332.5 230 358.6 230 414.5 184.5 460 129 460S27.3 414.5 27.3 358.6C27.3 302.8 72.8 257.3 129 257.3"
                variants={externalPathVariants}
              />
              <motion.path
                fill="#0071BC"
                d="M172.1866 80.7644L172.1866 103.581 106.0182 128.1435 172.1866 152.7049 172.1866 174.9838 77.5634 137.0007 77.5634 118.7474z"
                variants={buttonVariants(1.3)}
              ></motion.path>
            </g>
          </g>
        </g>
      </motion.svg>
    </Wrapper>
  )
}

type Props = {
  hide?: boolean
  darkTheme?: boolean
}

const Wrapper = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: calc(var(--viewHeight, 1vh) * 100);
  z-index: 15;
  transition:
    visibility 1s ease-in-out,
    transform 1s;
  opacity: 1;
  visibility: visible;
  overflow: visible;

  &::before {
    content: "";
    position: absolute;
    background-color: ${({ darkTheme, theme }) => (darkTheme ? theme.colors.grey600 : theme.colors.white)};
    border-radius: 50%;
    transition: transform 1s;
    z-index: -1;
    width: 100rem;
    height: 100rem;

    @media ${({ theme }) => theme.device.md} {
      width: 170rem;
      height: 170rem;
    }

    @media ${({ theme }) => theme.device.xlUp} {
      min-width: 150%;
      min-height: 150%;
      width: auto;
      height: auto;
      aspect-ratio: 1/1;
    }
  }

  svg {
    overflow: visible;
    transition: transform 0.475s;
    transition-delay: 0.525s;

    @media ${({ theme }) => theme.device.xlUp} {
      transition: transform 0.4s;
      transition-delay: 0.6s;
    }
  }

  ${({ hide }) =>
    hide &&
    css`
      visibility: hidden;
      &::before {
        transform: scale(0);
      }
      svg {
        transform: scale(0);
      }
    `}
`

export default IntroAnimation
