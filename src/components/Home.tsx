import React, { useState } from 'react';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutline';
import {
  Main,
  Title,
  ImageWrapper,
  TextArea,
  SmallTweetButton,
  TweetFooterContainer,
  TweetBoxContainer
} from './styles';

export default function Home() {
  const [tweet, setTweet] = useState<string>('');

  function handleTweetChange(event: React.ChangeEvent<{ value: string }>) {
    setTweet(event.target.value);
  }
  return (
    <Main>
      <Title>Home</Title>

      <TweetBoxContainer>
        <div style={{ display: 'flex' }}>
          <ImageWrapper>
            <PersonOutlinedIcon />
          </ImageWrapper>

          <TextArea
            value={tweet || ''}
            placeholder="What's happening?"
            onChange={handleTweetChange}
          />
        </div>

        <TweetFooterContainer>
          <SmallTweetButton>Tweet</SmallTweetButton>
        </TweetFooterContainer>
      </TweetBoxContainer>
    </Main>
  );
}
