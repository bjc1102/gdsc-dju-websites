import styled from 'styled-components';

export const SearchResultTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40px;
  margin: 100px 0 80px;
  color: ${(props) => props.theme.colors.grey900};
`;
export const SearchResultTitle = styled.h1`
  display: flex;
  align-self: flex-start;
  padding: 12px 0;
  font-size: ${({ theme }) => theme.fontSizes.titleS};
  color: ${(props) => props.theme.colors.grey900};
`;

export const SearchResultContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  line-height: 1.625rem;
  color: ${(props) => props.theme.colors.grey600};
`;
export const PostSectionWrapper = styled.div`
  min-height: 600px;
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
`;
export const PostLayoutWrapper = styled.div`
  max-width: 1082px;
  width: 1082px;
  display: flex;
  gap: 60px;
  flex-direction: column;
`;
export const CategoryMenuWrapper = styled.div`
  margin: 60px 0px;
`;

export const PageBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 110px 0px;
`;

export const LayoutInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`;

export const BlogCardGridLayoutWrapper = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 400px;
  span {
    font-size: ${({ theme }) => theme.fontSizes.textXl};
    color: ${({ theme }) => theme.colors.grey400};
  }
`;
