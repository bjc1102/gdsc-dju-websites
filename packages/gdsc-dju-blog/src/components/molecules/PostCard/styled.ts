import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const PostCardInner = styled(motion.article)`
  position: relative;
  width: 248px;
  height: 294px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.colors.boxShadow100};
  cursor: pointer;
`;

export const BookMarkWrapper = styled.div`
  position: absolute;
  width: 23.33px;
  height: 30px;
  right: 17px;
  top: -3px;
  cursor: pointer;
`;

export const PostCardThumbnailWrapper = styled.div`
  width: 248px;
  height: 294px;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 10px;
  border: none;
`;
export const PostCardThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostCardTagWrapper = styled.div<{ IsHovered: boolean }>`
  display: flex;
  position: absolute;
  bottom: ${({ IsHovered }) => (IsHovered ? '254px' : '92px')};
  transition: all 0.3s ease;
  left: 9px;
`;
export const PostCardTag = styled.div`
  height: 17px;
  padding: 1px 10px;
  border-radius: 50px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    color: #ffffff;
  }
`;
export const PostCardBottomBox = styled(motion.div)<{ isHovered: boolean }>`
  position: absolute;
  border-radius: 10px;
  border: none;
  width: 100%;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.grey50};
  padding: 8px 20px 12px;
  gap: ${({ isHovered }) => (isHovered ? '170px' : '8px')};
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
`;
export const PostCardTitle = styled(motion.h6)`
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey900};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const PostCardSubTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const PostCardAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const PostCardAuthorImage = styled.img`
  background: ${({ theme }) => theme.colors.grey400};
  border-radius: 100%;
  margin-right: 7px;
  height: 18px;
  width: 18px;
`;
export const PostCardPostText = styled(motion.div)`
  position: absolute;
  transform: translate(-50%, 0%);
  top: 53px;
  min-height: 120px;
  max-height: 120px;
  word-break: break-all;
  text-overflow: ellipsis;
`;
export const PostText = styled.article`
  width: 208px;
  white-space: normal;
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 7;
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey700};
`;

export const PostCardSubText = styled.div<{
  subText?: boolean;
  bold?: boolean;
}>`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey900};
  ${({ subText }) =>
    subText &&
    css`
      color: ${({ theme }) => theme.colors.grey400};
    `}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: 600;
    `}
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
`;
