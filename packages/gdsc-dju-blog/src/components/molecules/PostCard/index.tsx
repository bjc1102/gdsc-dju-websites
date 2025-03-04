import React, { memo, useCallback, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';

import { AnimatePresence, LayoutGroup } from 'framer-motion';

import BookmarkIcon from '@assets/icons/BookmarkIcon';
import { PostTextVariants } from '@src/components/Animation';
import { HashTageLight } from '@src/components/atoms/HashTage';
import { useSetBookMark } from '@src/hooks/useHandleBookMark';
import { PostData } from '@type/postData';
import { dateFilter } from '@utils/dateFilter';
import { debounce } from '@utils/debounce';
import { removeMarkdownInContent } from '@utils/removeMarkdownInContent';
import { thumbnailHandler } from '@utils/thumbnailHandler';

import {
  BookMarkWrapper,
  PostCardAuthorImage,
  PostCardAuthorWrapper,
  PostCardBottomBox,
  PostCardInner,
  PostCardPostText,
  PostCardSubText,
  PostCardSubTextWrapper,
  PostCardTagWrapper,
  PostCardThumbnail,
  PostCardThumbnailWrapper,
  PostCardTitle,
  PostText,
} from './styled';

interface Props {
  postData: PostData;
  isScrap: boolean;
}

const PostCard: React.FC<Props> = ({ postData, isScrap }) => {
  const [IsHovered, setIsHovered] = useState(false);
  const [isMarked, setIsMarked] = useState(isScrap);
  const [cookie] = useCookies(['token']);
  const { bookMarkHandler } = useSetBookMark(
    postData.postId,
    cookie.token,
    () => setIsMarked(!isMarked),
  );
  const debounceBookMarkHandler = debounce(bookMarkHandler, 300);
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    debounceBookMarkHandler();
  };

  const navigate = useNavigate();

  const linkToPost = useCallback(() => {
    navigate(`/@${postData.memberInfo.nickname}/${postData.postId}`);
  }, [postData]);

  const removedMarkDownContent = removeMarkdownInContent(postData.content);

  return (
    <LayoutGroup>
      <PostCardInner onClick={linkToPost}>
        {/* 북마크 */}
        <BookMarkWrapper
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            handleClick(e)
          }
        >
          <BookmarkIcon marked={isMarked} />
        </BookMarkWrapper>
        {/* 이미지 */}
        <PostCardThumbnailWrapper>
          <picture>
            {postData.imagePath ? (
              <PostCardThumbnail src={postData.imagePath} alt="thumbnail" />
            ) : (
              <>
                <source srcSet={thumbnailHandler(postData.postId).webp} />
                <PostCardThumbnail
                  src={thumbnailHandler(postData.postId).jpg}
                  alt="PostCardThumbnail"
                />
              </>
            )}
          </picture>
        </PostCardThumbnailWrapper>
        {/* 태그 */}
        {postData.postHashTags && (
          <PostCardTagWrapper IsHovered={IsHovered}>
            {postData.postHashTags
              .filter((data, index) => index < 2)
              .map((data: string, index: number) => (
                <HashTageLight key={index} text={data} />
              ))}
          </PostCardTagWrapper>
        )}
        {/* 하단 PostHeader */}
        <PostCardBottomBox
          isHovered={IsHovered}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          <PostCardTitle>{postData.title}</PostCardTitle>
          <AnimatePresence>
            {IsHovered && (
              <PostCardPostText
                key="PostCardPostText"
                variants={PostTextVariants}
                initial={'initial'}
                animate={'visible'}
                exit={'exit'}
              >
                <PostText>{removedMarkDownContent}</PostText>
              </PostCardPostText>
            )}
          </AnimatePresence>
          <PostCardSubTextWrapper>
            {postData.memberInfo && (
              <PostCardAuthorWrapper>
                <PostCardAuthorImage
                  alt="AuthorImage"
                  src={postData.memberInfo.profileImageUrl}
                />

                <PostCardSubText subText={true}>by</PostCardSubText>
                <PostCardSubText bold={true}>
                  {postData.memberInfo.nickname}
                </PostCardSubText>
              </PostCardAuthorWrapper>
            )}
            <PostCardSubText subText={true}>
              {dateFilter(postData.uploadDate)}
            </PostCardSubText>
          </PostCardSubTextWrapper>
        </PostCardBottomBox>
      </PostCardInner>
    </LayoutGroup>
  );
};

export default memo(PostCard);
