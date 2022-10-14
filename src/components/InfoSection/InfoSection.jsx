import React from "react";
import * as Styled from "./InfoSectionStyled";
import { Button, Container } from "../../globalStyles";
import { Link } from "react-router-dom";

const InfoSection = ({
  img,
  alt,
  start,
  lightBg,
  imgStart,
  lightText,
  lightTopLine,
  lightTextDecs,
  buttonLabel,
  description,
  headline,
  topLine,
  primary,
}) => {
  return (
    <>
      <Styled.InfoSec lightBg={lightBg}>
        <Container>
          <Styled.InfoRow imgStart={imgStart}>
            <Styled.InfoColumn>
              <Styled.TextWrapper>
                <Styled.TopLine lightTopLine={lightTopLine}>
                  {topLine}
                </Styled.TopLine>
                <Styled.Heading lightText={lightText}>
                  {headline}
                </Styled.Heading>
                <Styled.Subtitle lightTextDecs={lightTextDecs}>
                  {description}
                </Styled.Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </Styled.TextWrapper>
            </Styled.InfoColumn>
            <Styled.InfoColumn>
              <Styled.ImgWrapper start={start}>
                <Styled.Img src={img} alt={alt} />
              </Styled.ImgWrapper>
            </Styled.InfoColumn>
          </Styled.InfoRow>
        </Container>
      </Styled.InfoSec>
    </>
  );
};

export default InfoSection;
