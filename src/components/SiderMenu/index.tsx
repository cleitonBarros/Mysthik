import * as S from "./style";
import { Link } from "react-scroll";
import { UseWindowSize } from "../../hook/useWidthSize";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
export function SiderMenu() {
  const [open, setOpen] = React.useState(false);
  const [width] = UseWindowSize();
  React.useEffect(() => {
    if (width >= 765) {
      setOpen(false);
    }
  }, [width]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <S.Hamburger className={open ? "open" : ""}>
        <span></span>
        <span></span>
        <span></span>
      </S.Hamburger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <S.Sidebar className={open ? "open" : ""}>
          <S.Menu>
            <S.Logo>
              <div className="shape">
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <div className="shape-3"></div>
              </div>
            </S.Logo>
            <ul>
              <li>
                <a href="#funcionalidade" onClick={() => setOpen(false)}>
                  Funcionalidade
                </a>
              </li>
              <li>
                <a href="#app" onClick={() => setOpen(false)}>
                  App
                </a>
              </li>
              <li>
                <a href="#planos" onClick={() => setOpen(false)}>
                  Planos
                </a>
              </li>
              <li>
                <a href="#contato" onClick={() => setOpen(false)}>
                  contato
                </a>
              </li>
            </ul>
          </S.Menu>
        </S.Sidebar>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
