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
  width: 70%;
`;
