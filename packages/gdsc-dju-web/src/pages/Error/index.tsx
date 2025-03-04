import React from 'react';

import ErrorLottie from '@common/lotties/ErrorLottie';
import { MainText, Title } from '@src/components/atoms/title';

import { ErrorContainer, ErrorContentWrapper } from './styled';

const Error = ({ error }: { error?: Error }) => {
  return (
    <ErrorContainer>
      <ErrorContentWrapper>
        <Title>어딘가 문제가 생겼어요</Title>
        <MainText>{error?.message}</MainText>
      </ErrorContentWrapper>
      <ErrorLottie />
    </ErrorContainer>
  );
};

export default Error;
