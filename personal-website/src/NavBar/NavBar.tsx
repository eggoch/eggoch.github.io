import styled from "styled-components";
import { Menu, GitHub, Linkedin, X } from "react-feather";

const NavBarWrapper = styled.div`
  height: 100vh;
  z-index: 3;
`;

const NavBarImage = styled.div<{ isNavBarOpen: boolean }>`
  position: relative;
  weidth: 100%;
  height: 100%;
  background-image: url("/globalResources/stripedPaper.png");
  background-repeat: no-repeat;
  top: -5%;
  right: 28.5%;
  transform: scale(1.1);

  ${(props) =>
    props.isNavBarOpen
      ? `animation: open 500ms ease-in;
    right: 18%;
    `
      : `animation: close 650ms ease-in;
    right: 28.5%;
    `}

  @keyframes open {
    0% {
      right: 28.5%;
    }
    100% {
      right: 18%;
    }
  }

  @keyframes close {
    0% {
      right: 18%;
    }
    100% {
      right: 28.5%;
    }
  }
`;

const MenuWrapper = styled.button<{ isNavBarOpen: boolean }>`
  position: relative;
  top: 12.5%;
  left: 31.5%;
  z-index: 4;
  background-color: transparent;
  border: none;

  ${(props) =>
    props.isNavBarOpen
      ? `animation: fadeIn 150ms ease-in;
    opacity: 0;`
      : `animation: fadeOut 150ms ease-in;
    opacity: 1;`}

  @keyframes fadeOut {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const MenuItemWrapper = styled.div<{ isNavBarOpen: boolean }>`
  position: relative;
  top: 12.5%;
  left: 31.5%;
  display: flex;
  flex-direction: column;
  opacity: 0;

  ${(props) =>
    props.isNavBarOpen
      ? `animation: fadeOut 500ms ease-in;
    opacity: 1;`
      : `animation: fadeIn 500ms ease-in;
    opacity: 0;`}

  @keyframes fadeOut {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const MenuItem = styled.a`
  position: relative;
  font-size: 32px;
  padding: 1.055%;
  left: -10%;
`;

const SocialLinkWrapper = styled.div<{ isNavBarOpen: boolean }>`
  position: absolute;
  bottom: 0.75%;
  left: 20%;
  display: flex;
  flex-direction: row;

  ${(props) =>
    props.isNavBarOpen
      ? `animation: fadeOut 500ms ease-in;
    opacity: 1;`
      : `animation: fadeIn 500ms ease-in;
    opacity: 0;`}

  @keyframes fadeOut {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const SocialIconWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const menuItems = ["About", "Experience", "Contact", "Resume"];

interface NavBarProps {
  isNavBarOpen: boolean;
  onClick: () => void | null;
}

export const NavBar: React.FC<NavBarProps> = ({ isNavBarOpen, onClick }) => {
  return (
    <NavBarWrapper>
      <NavBarImage isNavBarOpen={isNavBarOpen}>
        <MenuWrapper isNavBarOpen={isNavBarOpen} onClick={onClick}>
          <Menu size={32} />
        </MenuWrapper>
        <MenuItemWrapper isNavBarOpen={isNavBarOpen}>
          {menuItems.map((menuItem) => {
            return <MenuItem>{menuItem}</MenuItem>;
          })}
        </MenuItemWrapper>
        <SocialLinkWrapper isNavBarOpen={isNavBarOpen}>
          <SocialIconWrapper>
            <Linkedin size={32} />
          </SocialIconWrapper>
          <SocialIconWrapper>
            <GitHub size={32} />
          </SocialIconWrapper>
        </SocialLinkWrapper>
      </NavBarImage>
    </NavBarWrapper>
  );
};
