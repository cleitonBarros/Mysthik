import { useEffect, useState } from "react";
import * as S from "./style";
import { Link } from "react-scroll";
import { Sling as Hamburger } from "hamburger-react";
import { UseWindowSize } from "../../hook/useWidthSize";
export function Header() {
  const [isOpen, setOpen] = useState(false);
  const [width] = UseWindowSize();
  useEffect(() => {
    if (width >= 765) {
      setOpen(false);
    }
  }, [width]);

  <Hamburger
    onToggle={(toggled) => {
      if (toggled) {
        setOpen(true);
        return;
      } else {
        setOpen(false);
      }
    }}
  />;
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
          <Hamburger toggled={isOpen} toggle={setOpen} />
        ) : (
          <ul>
            <li>
              <Link
                to="funcionalidade"
                smooth={true}
                spy={true}
                offset={-10}
                duration={100}
              >
                Funcionalidade
              </Link>
            </li>
            <li>
              <Link
                to="app"
                smooth={true}
                spy={true}
                offset={-10}
                duration={100}
              >
                App
              </Link>
            </li>
            <li>
              <Link
                to="planos"
                smooth={true}
                spy={true}
                offset={-10}
                duration={100}
              >
                Planos
              </Link>
            </li>
            <li>
              <Link
                to="contato"
                smooth={true}
                spy={true}
                offset={-10}
                duration={100}
              >
                contato
              </Link>
            </li>
          </ul>
        )}
      </S.Nav>
      <S.Sidebar className={isOpen ? "open" : ""}>
        <S.Logo>
          <div className="shape">
            <div className="shape-1"></div>
            <div className="shape-2"></div>
            <div className="shape-3"></div>
          </div>
        </S.Logo>
        <ul>
          <li>
            <Link
              to="funcionalidade"
              smooth={true}
              spy={true}
              offset={-10}
              duration={100}
              onClick={() => setOpen(false)}
            >
              Funcionalidade
            </Link>
          </li>
          <li>
            <Link
              to="app"
              smooth={true}
              spy={true}
              offset={-10}
              duration={100}
              onClick={() => setOpen(false)}
            >
              App
            </Link>
          </li>
          <li>
            <Link
              to="planos"
              smooth={true}
              spy={true}
              offset={-10}
              duration={100}
              onClick={() => setOpen(false)}
            >
              Planos
            </Link>
          </li>
          <li>
            <Link
              to="contato"
              smooth={true}
              spy={true}
              offset={-10}
              duration={100}
              onClick={() => setOpen(false)}
            >
              contato
            </Link>
          </li>
        </ul>
      </S.Sidebar>
    </S.Container>
  );
}
