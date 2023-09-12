import { styled } from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 4rem;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 0 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    width: 450px;
    justify-content: space-between;
    li {
      a {
        color: ${({ theme }) => theme.COLORS.BLACK};
        font-size: 1rem;
        font-weight: 400;

        &:hover {
          color: ${({ theme }) => theme.COLORS.HOTPINK};
        }
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .shape {
    width: 1.5rem;
    height: 2rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .shape-1 {
      position: absolute;
      width: 1rem;
      height: 0.5rem;
      background-color: ${({ theme }) => theme.COLORS.HOTPINK};
      top: 0;
      left: -10px;
    }
    .shape-2 {
      position: absolute;
      width: 1.75rem;
      height: 0.5rem;
      background-color: ${({ theme }) => theme.COLORS.PINK};

      top: 10px;
      left: -5px;
    }
    .shape-3 {
      position: absolute;
      width: 1.25rem;
      height: 0.5rem;
      background-color: ${({ theme }) => theme.COLORS.RED};
      top: 20px;
      left: -15px;
    }
  }
  p {
    font-size: 1.25rem;
    font-weight: 400;
    font-family: "ADLaM Display", cursive;
    color: ${({ theme }) => theme.COLORS.BLACK};
  }
`;
export const Sidebar = styled.menu`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  width: 60%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.SNOW};

  transition: all 0.5s linear;
  transform: translateX(-100%);

  &.open {
    transform: translateX(0);
  }
  ul {
    height: 22rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    li {
      a {
        color: ${({ theme }) => theme.COLORS.BLACK};
        font-size: 1.25rem;
        font-weight: 600;
        text-transform: uppercase;

        &:hover {
          color: ${({ theme }) => theme.COLORS.HOTPINK};
        }
      }
    }
  }

  @media (${({ theme }) => theme.DEVICE.tablet}) {
    transform: translateX(-100%);
  }
`;
