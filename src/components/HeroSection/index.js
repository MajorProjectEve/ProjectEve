import React, { useState } from "react";

import TrackVisibility from "react-on-screen";
import headerImg from "../../images/header-img.svg";
import bannerBg from "../../images/banner-bg.png";

import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TxtWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./HeroElements";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImgBg src={bannerBg} />
      </HeroBg>
      <HeroContent>
        <>
          <InfoRow>
            <Column1>
              <HeroH1>ProjectEve</HeroH1>
              <HeroP>
                There are many diseases that affect a large number of women like
                Cervical Cancer, Breast Cancer, PCOS, and
                Hyperthyroidism/Hypothyroidism.
              </HeroP>
              <HeroP>
                We provide prediction and diagnosis of these diseases based on
                your symptoms.
              </HeroP>
              <HeroBtnWrapper>
                <Button
                  to="signUp"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary="true"
                  dark="true"
                >
                  Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
              </HeroBtnWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img src={headerImg} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
