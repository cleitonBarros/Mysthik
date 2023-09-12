import { ChatsTeardrop, FlowerTulip, ListChecks } from "@phosphor-icons/react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import image from "./../assets/tupila.png";
import google from "./../assets/googleplay.png";
import apple from "./../assets/appstore.png";

import * as S from "./style";
import { Footer } from "../components/Footer";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    ScrollReveal({
      distance: "60px",
      duration: 1500
    });
    ScrollReveal().reveal(".text", { delay: 300, origin: "left" });
    ScrollReveal().reveal(".paragraph", { delay: 500, origin: "top" });
    ScrollReveal().reveal(".button ", { delay: 600, origin: "bottom" });
    ScrollReveal().reveal(".img ", { delay: 700, origin: "right" });
    ScrollReveal().reveal(".card-1", { delay: 200, origin: "left" });
    ScrollReveal().reveal(".card-2", { delay: 300, origin: "bottom" });
    ScrollReveal().reveal(".card-3", { delay: 200, origin: "right" });
  }, []);

  return (
    <>
      <Header />
      <main>
        <S.Hero>
          <article className="title">
            <header>
              <h1 className="text">
                Mysthik,
                <br />
                a primeira
                <br />
                consultoria sobre plantas.
              </h1>
            </header>
            <p className="paragraph">
              Venha aprender a cuidar de suas plantas !
            </p>
            <a className="button" href="#contato">
              Contate-me
            </a>
          </article>
          <picture className="img">
            <img src={image} alt="duas tulipas" />
          </picture>
        </S.Hero>
        <S.Funcionalidade id="funcionalidade">
          <header>
            <h2 className="text">Como Funciona</h2>
          </header>
          <article className="card-info ">
            <Card
              className="card-1"
              icon={<ChatsTeardrop color="#ff69b4" size={64} />}
              title="Contato"
              text="Entre em contado conosco."
            />
            <Card
              className="card-2"
              icon={<ListChecks color="#ff69b4" size={64} />}
              title="Marque a consulta"
              text="Marque um dia para avaliarmos suas plantas"
            />
            <Card
              className="card-3"
              icon={<FlowerTulip color="#ff69b4" size={64} />}
              title="Aprenda"
              text="Aprenda a manter a saúde de suas plantas"
            />
          </article>
        </S.Funcionalidade>
        <S.Download id="app">
          <article className="app">
            <h2 className="text">Baixe Nosso App </h2>
            <p className="paragraph">
              Baixe nosso aplicativo para melhor usufruir, você conseguira
              marcar as visitar com mais facilidade e gerenciar suas plantas.
            </p>
            <div className="button-field">
              <button>
                <img
                  className="card-1"
                  src={google}
                  alt="google play"
                  title="google play"
                />
              </button>
              <button>
                <img
                  className="card-3"
                  src={apple}
                  alt="app store"
                  title="app store"
                />
              </button>
            </div>
          </article>
        </S.Download>
        <S.planos id="planos">
          <hgroup>
            <h2 className="text">Nossos Planos</h2>
            <p className="paragraph">
              Conheça nossos planos abaixo, e veja qual mais lhe agrada e
              combina com você.
            </p>
          </hgroup>
          <article className="cards">
            <div className="card card-1">
              <h3>Acacia</h3>
              <h4>34</h4>
              <p>
                ⪩ Uma visita ao mês
                <br />
                ⪩ Consultoria sobre plantas
                <br />
              </p>
              <button>Plantar</button>
            </div>
            <div className="card special card-2">
              <h3>Petunia</h3>
              <h4>50</h4>
              <p>
                ⪩ Duas visitas ao mês
                <br />
                ⪩ Consultoria sobre plantas
                <br />⪩ Ganha uma orquidia na primeira consultoria
              </p>
              <button>Plantar</button>
            </div>
            <div className="card card-3">
              <h3>Tulipa</h3>
              <h4>64</h4>
              <p>
                ⪩ Quatro visitas ao mês
                <br />
                ⪩ Consultoria sobre plantas
                <br />
                ⪩ Ganha uma orquidia na primeira consultoria
                <br />⪩ Duvida online
              </p>
              <button>Plantar</button>
            </div>
          </article>
        </S.planos>
      </main>
      <Footer />
    </>
  );
}
