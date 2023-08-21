import * as S from "./style";

type cardProps = {
  text?: string;
  title?: string;
  icon?: JSX.Element;
};

export function Card({  text, title, icon }: cardProps) {
  return (
    <S.Container >
      <div>{icon}</div>
      <h4>{title}</h4>
      <p>{text}</p>
    </S.Container>
  );
}
