import styled from "styled-components"

const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 7fr 2fr;
  background-color: var(--headerBackgroundColor);
  height: 60px;
  margin-bottom: 20px;
  align-items: center;
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25));
`

const Header = () => {
  return <Container>Header</Container>
}

export default Header
