import * as S from "./style";

type cardProps = {
  text?: string;
  title?: string;
  icon?: JSX.Element;
  className?: string;
};

export function Card({ className, text, title, icon }: cardProps) {
  return (
    <S.Container className={className}>
      <i>{icon}</i>
      <h4>{title}</h4>
      <p>{text}</p>
    </S.Container>
  );
}
