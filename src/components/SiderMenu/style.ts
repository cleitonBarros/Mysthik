import { styled } from "styled-components";

import * as Dialog from "@radix-ui/react-dialog";

export const Sidebar = styled(Dialog.Content)`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 55%;
  min-height: 100vh;

  transition: all 0.5s;
  transform: translateX(-100%);

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  &.open {
    transform: translateX(0);
  }

  display: flex;
  justify-content: center;
  align-items: center;

  @media (${({ theme }) => theme.DEVICE.mobile}) {
    width: 40%;
  }
  @media (${({ theme }) => theme.DEVICE.tablet}) {
    width: 30%;
  }
`;
export const Menu = styled.menu`
  padding: 0 3rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

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
export const Hamburger = styled(Dialog.Trigger)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
  height: 45px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  background-color: transparent;
  border: none;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 40px;
    background: #111;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    &:nth-child(1) {
      top: 6px;
    }

    &:nth-child(2) {
      top: 18px;
    }

    &:nth-child(3) {
      top: 30px;
    }
  }

  &.open span:nth-child(1) {
    top: 18px;
    transform: rotate(135deg);
  }

  &.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
  }

  &.open span:nth-child(3) {
    top: 18px;
    transform: rotate(-135deg);
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
