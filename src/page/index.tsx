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
      distance: "50px",
      duration: 1500,
      reset: true
    });
    ScrollReveal().reveal(".text", { delay: 500, origin: "left" });
    ScrollReveal().reveal(".paragraph", { delay: 700, origin: "top" });
    ScrollReveal().reveal(".button ", { delay: 900, origin: "bottom" });
    ScrollReveal().reveal(".img ", { delay: 1000, origin: "right" });
    ScrollReveal().reveal(".card-1", { delay: 700, origin: "left" });
    ScrollReveal().reveal(".card-2", { delay: 800, origin: "bottom" });
    ScrollReveal().reveal(".card-3", { delay: 700, origin: "right" });


  }, []);

  return (
    <>
      <Header />
      <S.Hero>
        <div className="title">
          <h1 className="text">
            Mysthik,
            <br />
            a primeira
            <br />
            consultoria sobre plantas.
          </h1>
          <p className="paragraph">Venha aprender a cuidar de suas plantas !</p>
          <a className="button" href="#contato">
            Contate-me
          </a>
        </div>
        <div className="img">
          <img src={image} alt="duas tulipas" />
        </div>
      </S.Hero>
      <S.Funcionalidade id="funcionalidade">
        <h2 className="text">Como Funciona</h2>
        <div className="card-info ">
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
        </div>
      </S.Funcionalidade>
      <S.Download id="app">
        <div className="app">
          <h2 className="text">Baixe Nosso App </h2>
          <p className="paragraph">
            Baixe nosso aplicativo para melhor usufruir, você conseguira marcar
            as visitar com mais facilidade e gerenciar suas plantas.
          </p>
          <div className="button-field">
            <img className="card-1" src={google} alt="google play" title="google play" />
            <img className="card-3" src={apple} alt="app store" title="app store" />
          </div>
        </div>
      </S.Download>
      <S.planos id="planos">
        <h2 className="text">Nossos Planos</h2>
        <p className="paragraph" >
          Conheça nossos planos abaixo, e veja qual mais lhe agrada e combina
          com você.
        </p>
        <div className="cards">
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
        </div>
      </S.planos>
      <Footer />
    </>
  );
}
