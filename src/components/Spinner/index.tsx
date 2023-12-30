import styled from "styled-components"

const Spinner = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.primaryYellow};
  border-top-color: ${({ theme }) => theme.colors.primaryBlue};
  animation: ${({ theme }) => theme.animations.loading} 0.6s linear infinite;
`

export default Spinner
