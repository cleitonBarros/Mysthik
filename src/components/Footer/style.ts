import { styled } from "styled-components";
import flowers from "./../../assets/flower.jpg";

export const Container = styled.footer`
  width: 100%;
`;
export const Contact = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 5rem 6%;

  background-image: url(${flowers});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  h2 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 3rem;
    z-index: 2;
  }
  p {
    width: 65%;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
    margin-bottom: 6rem;
    line-height: 1;
    z-index: 2;
  }
  form {
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    button {
      cursor: pointer;
      width: 10rem;
      height: 3rem;
      font-size: 1.25rem;
      font-family: "Fredoka", sans-serif;
      font-weight: 500;
      border-radius: 30px;
      border: none;
      outline: none;
      background-color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
  @media (${({ theme }) => theme.DEVICE.mobile}) {
    padding: 5rem 10%;
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.75rem;
    }
    form {
      flex-direction: row;
    }
  }
`;
export const Copyright = styled.p`
  padding: 2rem 6%;
  color: ${({ theme }) => theme.COLORS.BLACK};
  text-align: center;
  font-size: 1rem;
  font-weight: 500;

  a {
    text-decoration: none;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.BLACKOUT};
  }
  .scroll-to-top {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed black;
    background-color: white;
    border-radius: 50%;
    position: fixed;
    bottom: 20px;
    right: 50px;
    width: 32px;
    height: 32px;
    z-index: 100;
    cursor: pointer;
  }
`;
