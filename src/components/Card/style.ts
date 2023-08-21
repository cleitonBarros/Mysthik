import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 13rem;

  > div {
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.COLORS.BLACKOUT};
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.BLACKOUT};
    text-align: center;
  }
  
`;
