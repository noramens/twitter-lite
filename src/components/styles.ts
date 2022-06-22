import styled from 'styled-components';
import Button from '@mui/material/Button';
import { styled as muiStyled } from '@mui/material/styles';

export const SideBar = styled.nav`
  min-width: 200px;
  margin: 20px 50px;
`;

export const SideBarLink = styled.div`
  display: flex;
  align-items: cover;
  cursor: pointer;
  border-radius: 30px;
  margin: 10px;

  &:hover {
    background-color: #e8f5fe;
    color: #50b7f5;
    transition: color 100ms ease-out;
  }
`;

export const SideBarText = styled.h2`
  font-weight: 700;
  font-size: 20px;
  margin-right: 20px;
`;

export const TweetButton = muiStyled(Button)({
  width: '100%',
  height: '50px',
  backgroundColor: 'hsl(203, 89%, 64%)',
  borderRadius: '20px',
  color: 'white',
  fontWeight: '700',
  textTransform: 'inherit',

  '&:hover': {
    backgroundColor: 'hsl(203, 89%, 64%)'
  }
});

export const Main = styled.main`
  width: 50%;
  border: 1px solid #eeee;
`;

export const Title = styled.h2`
  color: rgb(15, 20, 25);
  font-weight: 700;
  line-height: 24px;
  padding: 0 20px;
`;

export const ImageWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #e8f5fe;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
`;

export const TextArea = styled.textarea`
  border: 1px solid #fff;
  outline: 1px solid #fff;
  font-size: 20px;
  font-weight: 400;
  width: 80%;
  font-family: 'Arimo', sans-serif;
`;

export const SmallTweetButton = styled.button`
  background-color: hsl(203, 89%, 64%);
  border: 1px solid hsl(203, 89%, 64%);
  outline: 1px solid hsl(203, 89%, 64%);
  margin-right: 20px;
  padding: 8px 20px;
  border-radius: 20px;
  color: white;
  font-weight: 700;
  text-transform: inherit;
  font-size: 15px;

  '&:hover': {
    background-color: hsl(203, 89%, 64%);
  }
`;

export const TweetBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const TweetFooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 20px 20px 90px;
  border-top: 1px solid #eee;
  padding-top: 20px;
`;
