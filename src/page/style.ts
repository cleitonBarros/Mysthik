import { styled } from "styled-components";

export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 5rem 6%;
  background-color: ${({ theme }) => theme.COLORS.SNOW};
  row-gap: 5rem;

  .title {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h1 {
      font-size: 2.5rem;
      line-height: 1;
      color: ${({ theme }) => theme.COLORS.BLACK};
    }
    p {
      font-size: 1.25rem;
      font-weight: 500;
      text-transform: uppercase;
      color: ${({ theme }) => theme.COLORS.HOTPINK};
    }
    a {
      margin-left: 2.4rem;
      font-size: 1.25rem;
      font-weight: 600;
      color: ${({ theme }) => theme.COLORS.BLACKOUT};
      position: relative;
      z-index: 5;

      &:before {
        box-shadow: 1px 3px 4px rgba(255, 196, 227, 0.8);

        position: absolute;
        content: "";
        left: -25px;
        top: -8px;
        transform: skewX(-35deg);
        width: 11rem;
        height: 3rem;
        z-index: -1;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.COLORS.PINK};
      }
      &:hover {
        filter: brightness(1.1);
      }
    }
  }

  .img {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 50%;
    }
  }
  @media (${({ theme }) => theme.DEVICE.mobile}) {
    padding: 5rem 10%;

    .img {
      img {
        width: 80%;
      }
    }
  }

  @media (${({ theme }) => theme.DEVICE.laptop}) {
    .img {
      width: auto;
    }
  }

  @media (${({ theme }) => theme.DEVICE.desktop}) {
    justify-content: space-between;
    .img {
      justify-content: flex-end;
    }
  }
`;
export const Funcionalidade = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 6%;
  row-gap: 4rem;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.BLACK};

    &::first-letter {
      color: ${({ theme }) => theme.COLORS.HOTPINK};
    }
  }
  .card-info {
    display: flex;
    gap: 6rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (${({ theme }) => theme.DEVICE.mobile}) {
    padding: 5rem 10%;
    h2 {
      font-size: 2.5rem;
    }
  }
`;

export const Download = styled.section`
  background-color: ${({ theme }) => theme.COLORS.SNOW};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 6%;

  .app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;

    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${({ theme }) => theme.COLORS.BLACK};
      margin-bottom: 1.5rem;
    }
    p {
      width: 80%;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.BLACK};
      font-size: 0.875rem;
      line-height: 1.6rem;
      margin-bottom: 1.5rem;
    }

    .button-field {
      display: flex;
      gap: 1.5rem;
      img {
        cursor: pointer;
        width: 9rem;
        height: 2.7rem;
      }
    }
  }

  @media (${({ theme }) => theme.DEVICE.mobile}) {
    padding: 5rem 10%;
    .app {
      p {
        width: 65%;
        font-size: 1.25rem;
      }
      .button-field {
        img {
          width: auto;
          height: auto;
        }
      }
    }
  }
`;

export const planos = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 6%;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.BLACK};
    margin-bottom: 1.5rem;
  }
  > p {
    width: 80%;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-size: 0.875rem;
    line-height: 1.6rem;
    margin-bottom: 6rem;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.75rem;
    text-align: center;
    justify-content: center;
    .card {
      border: 0.5px dashed black;
      background-color: ${({ theme }) => theme.COLORS.SNOW};
      display: flex;
      flex-direction: column;
      width: 20.5rem;
      height: 29rem;
      border-radius: 8px;
      align-items: center;
      justify-content: center;
      position: relative;

      &.special {
        background-color: #70005c;
        h3,
        h4,
        p {
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
        button {
          background-color: ${({ theme }) => theme.COLORS.HOTPINK};
        }
      }
      h3 {
        font-size: 1.75rem;
        font-weight: 600;
        margin-bottom: 3.6rem;
        color: ${({ theme }) => theme.COLORS.BLACKOUT};
      }
      h4 {
        position: relative;
        font-size: 3.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.COLORS.BLACKOUT};
        margin-bottom: 3rem;

        &:before {
          content: "R$";
          font-size: 1.4rem;
          position: absolute;
          top: 15px;
          left: -32px;
        }
        &:after {
          content: "/mês";
          font-size: 1.5rem;
          position: absolute;
          bottom: 15px;
          right: auto;
        }
      }

      p {
        width: 80%;
        height: 5rem;
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.BLACKOUT};
        text-align: center;
        margin-bottom: 3.6rem;
      }
      button {
        width: 12rem;
        height: 2.4rem;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 30px;
        border: none;
        outline: none;
        background-color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }

  @media (${({ theme }) => theme.DEVICE.mobile}) {
    padding: 5rem 10%;
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;
