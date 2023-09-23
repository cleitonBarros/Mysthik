import * as S from "./style";


import { UseWindowSize } from "../../hook/useWidthSize";
import { SiderMenu } from "../SiderMenu";
export function Header() {
  const [width] = UseWindowSize();

  return (
    <S.Container>
      <S.Nav>
        <S.Logo>
          <div className="shape">
            <div className="shape-1"></div>
            <div className="shape-2"></div>
            <div className="shape-3"></div>
          </div>
          <p>Mysthik</p>
        </S.Logo>
        {width < 765 ? (
          <SiderMenu />
        ) : (
          <ul>
            <li>
              <a href="#funcionalidade">Funcionalidade</a>
            </li>
            <li>
              <a href="#app">App</a>
            </li>
            <li>
              <a href="#planos">Planos</a>
            </li>
            <li>
              <a href="#contato">contato</a>
            </li>
          </ul>
        )}
      </S.Nav>
    </S.Container>
  );
}
