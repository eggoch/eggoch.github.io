import styled from "styled-components";
import { Menu, GitHub, Linkedin, X } from "react-feather";

const NavBarWrapper = styled.div<{ isOnAbout: boolean }>`
  position: fixed;
  height: 100vh;
  z-index: 3;
  opacity: 0;

  ${(props) =>
    props.isOnAbout &&
    `
    animation: appear 1.75s ease-in;
    opacity: 1;
    `}

  @keyframes appear {
    0% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const NavBarImage = styled.div<{ isNavBarOpen: boolean }>`
  position: relative;
  height: 100%;
  width: 20vw;
  top: -1.5%;
  background-position: right;
  background-image: url("/globalResources/stripedPaper.png");
  background-repeat: no-repeat;
  transform: scale(1.1);

  ${(props) =>
    props.isNavBarOpen
      ? `animation: open 500ms ease-in;
    right: -5%;
    `
      : `animation: close 650ms ease-in;
    right: 60%;
    `}

  @keyframes open {
    0% {
      right: 60%;
    }
    100% {
      right: -5%;
    }
  }

  @keyframes close {
    0% {
      right: -5%;
    }
    100% {
      right: 60%;
    }
  }
`;

const MenuButtonWrapper = styled.button`
  position: relative;
  top: 11%;
  left: 62.5%;
  z-index: 4;
  background-color: transparent;
  border: none;

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const MenuItemWrapper = styled.div<{ isNavBarOpen: boolean }>`
  position: relative;
  top: 15.75%;
  left: 31.5%;
  display: flex;
  flex-direction: column;
  opacity: 0;

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }

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
  padding-bottom: 11%;
  right: 20%;
  color: inherit;
  text-decoration: none;
`;

const SocialLinkWrapper = styled.div<{ isNavBarOpen: boolean }>`
  position: absolute;
  bottom: 4.75%;
  left: 1.5%;
  display: flex;
  flex-direction: row;

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }

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

const SocialIconWrapper = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px;
  color: inherit;
`;

const menuItems = ["Home", "About", "Experience", "Contact", "Resume"];
const ids = ["home", "about", "experience", "contact", "resume"];

interface NavBarProps {
  isOnAbout: boolean;
  isNavBarOpen: boolean;
  onClick: () => void | null;
}

export const NavBar: React.FC<NavBarProps> = ({
  isOnAbout,
  isNavBarOpen,
  onClick,
}) => {
  return (
    <NavBarWrapper isOnAbout={isOnAbout}>
      <NavBarImage isNavBarOpen={isNavBarOpen}>
        <MenuButtonWrapper onClick={onClick}>
          {isNavBarOpen ? <X size={32} /> : <Menu size={32} />}
        </MenuButtonWrapper>
        <MenuItemWrapper isNavBarOpen={isNavBarOpen}>
          {menuItems.map((menuItem, menuIndex) => {
            return (
              <MenuItem onClick={onClick} href={"#" + ids[menuIndex]}>
                {menuItem}
              </MenuItem>
            );
          })}
        </MenuItemWrapper>
        <SocialLinkWrapper isNavBarOpen={isNavBarOpen}>
          <SocialIconWrapper
            href="http://www.linkedin.com/in/ega-cheung-a8791520b"
            target="_blank"
          >
            <Linkedin size={32} />
          </SocialIconWrapper>
          <SocialIconWrapper href="https://github.com/eggoch" target="_blank">
            <GitHub size={32} />
          </SocialIconWrapper>
        </SocialLinkWrapper>
      </NavBarImage>
    </NavBarWrapper>
  );
};
