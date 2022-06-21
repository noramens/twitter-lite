import HomeIcon from '@material-ui/icons/Home';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { SideBarLinkProps } from './interfaces';
import { useNavigate } from 'react-router-dom';
import { SideBar, SideBarLink, SideBarText, TweetButton } from './styles';

function SidebarLink({ text, Icon, handleClick }: SideBarLinkProps) {
  return (
    <SideBarLink onClick={handleClick}>
      <Icon style={{ padding: '15px' }} />
      <SideBarText>{text}</SideBarText>
    </SideBarLink>
  );
}

function SideNav(): JSX.Element {
  const navigate = useNavigate();

  function navigateToHome(): void {
    navigate('/');
  }

  function navigateToProfile(): void {
    navigate('/profile');
  }

  return (
    <SideBar>
      <SidebarLink text="Home" Icon={HomeIcon} handleClick={navigateToHome} />
      <SidebarLink
        text="Profile"
        Icon={PermIdentityIcon}
        handleClick={navigateToProfile}
      />
      <TweetButton onClick={() => {}}>Tweet</TweetButton>
    </SideBar>
  );
}

export default SideNav;
