import { keyframes } from "styled-components"

const fadeIn = keyframes`
  from {
	  opacity: 0;
  }

  to {
	  opacity: 1;
  }
`

const grow = keyframes`
  from {
	  transform: scale(0);
  }

  to {
	  transform: scale(1);
  }
`

const menuIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const spring = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.2);
  }
`

const dash = keyframes`
  from {
    stroke-dashoffset: 1000;
  }

  to {
    stroke-dashoffset: 0;
  }
`

const fadeTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const fadeRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const loading = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const animations = {
  fadeIn,
  fadeBottom,
  fadeLeft,
  fadeRight,
  fadeTop,
  grow,
  menuIn,
  spring,
  dash,
  loading,
}

export default animations
