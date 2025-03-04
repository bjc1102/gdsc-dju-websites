import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAtom } from 'jotai';
import styled from 'styled-components';

import { bannerItemAnimate } from '@animations/variants';
import { recruitmentAtom } from '@src/store/recruitmentStatusAtom';

import DownArrow from '../../atoms/DownArrow';

import {
  ButtonWrapper,
  GoogleColorText,
  GoogleColorTextWrapper,
  HomeSectionContainer,
  HomeSectionContainerInner,
  HomeSectionWrapper,
  MainBannerText,
  RecruitingWrapper,
  StyledRecruitmentButton,
} from './styled';

export const HomeMainWrapper = styled(HomeSectionWrapper)`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
`;

const HomePageSection = () => {
  return (
    <HomeSectionContainer>
      <HomeSectionContainerInner>
        <HomeMainWrapper>
          <RecruitingWrapper variants={bannerItemAnimate}>
            <GoogleColorTextWrapper>
              <GoogleColorText color={'blue900'}>2</GoogleColorText>
              <GoogleColorText color={'red900'}>n</GoogleColorText>
              <GoogleColorText color={'yellow900'}>d</GoogleColorText>
              <GoogleColorText color={'green900'}>.</GoogleColorText>
            </GoogleColorTextWrapper>
            <GoogleColorText>Recruit</GoogleColorText>
            <MainBannerText variants={bannerItemAnimate}>
              지금 바로 GDSC에 합류하세요
            </MainBannerText>
            <HomeRecruitmentButton />
          </RecruitingWrapper>
          <DownArrow />
        </HomeMainWrapper>
      </HomeSectionContainerInner>
    </HomeSectionContainer>
  );
};
const HomeRecruitmentButton = () => {
  const [recruit] = useAtom(recruitmentAtom);
  const navigate = useNavigate();
  return (
    <ButtonWrapper variants={bannerItemAnimate}>
      {recruit.home ? (
        <StyledRecruitmentButton
          onClick={() => {
            navigate('/recruit');
          }}
        >
          지원하기
        </StyledRecruitmentButton>
      ) : (
        <StyledRecruitmentButton disable={true}>
          지원기간이 아닙니다.
        </StyledRecruitmentButton>
      )}
    </ButtonWrapper>
  );
};

export default HomePageSection;
