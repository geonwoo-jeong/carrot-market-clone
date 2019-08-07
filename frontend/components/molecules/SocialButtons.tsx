import styled from "styled-components";
import Facebook from "@Icons/Facebook";
import Github from "@Icons/Github";
import Line from "@Icons/Line";
import Twitter from "@Icons/Twitter";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconContainer = styled.span`
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: scale(1.15);
    filter: contrast(1.75);
  }
  &:active {
    transform: scale(1.5);
    filter: saturate(5);
  }
`;

const FacebookIcon = styled(Facebook)`
  width: 40px;
  height: 40px;
`;

const GithubIcon = styled(Github)`
  width: 40px;
  height: 40px;
`;

const LineIcon = styled(Line)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const TwitterIcon = styled(Twitter)`
  width: 40px;
  height: 40px;
`;

const SocialButtons = () => {
  return (
    <Container>
      <IconContainer>
        <FacebookIcon />
      </IconContainer>
      <IconContainer>
        <GithubIcon />
      </IconContainer>
      <IconContainer>
        <LineIcon />
      </IconContainer>
      <IconContainer>
        <TwitterIcon />
      </IconContainer>
    </Container>
  );
};

export default SocialButtons;
