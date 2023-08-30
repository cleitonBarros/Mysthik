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
      <div>{icon}</div>
      <h4>{title}</h4>
      <p>{text}</p>
    </S.Container>
  );
}
