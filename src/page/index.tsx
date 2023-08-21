import { ChatsTeardrop, FlowerTulip, ListChecks } from "@phosphor-icons/react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import image from "./../assets/tupila.png";
import google from "./../assets/googleplay.png";
import apple from "./../assets/appstore.png";

import * as S from "./style";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <Header />
      <S.Hero>
        <div className="title">
          <h1>
            Mysthik,
            <br />
            a primeira
            <br />
            consultoria sobre plantas.
          </h1>
          <p>Venha aprender a cuidar de suas plantas !</p>
          <a href="#contato">Contate-me</a>
        </div>
        <div className="img">
          <img src={image} alt="duas tulipas" />
        </div>
      </S.Hero>
      <S.Funcionalidade id="funcionalidade">
        <h2>Como Funciona</h2>
        <div className="card-info">
          <Card
            icon={<ChatsTeardrop color="#ff69b4" size={64} />}
            title="Contato"
            text="Entre em contado conosco."
          />
          <Card
            icon={<ListChecks color="#ff69b4" size={64} />}
            title="Marque a consulta"
            text="Marque um dia para avaliarmos suas plantas"
          />
          <Card
            icon={<FlowerTulip color="#ff69b4" size={64} />}
            title="Aprenda"
            text="Aprenda a manter a saúde de suas plantas"
          />
        </div>
      </S.Funcionalidade>
      <S.Download id="app">
        <div className="app">
          <h2>Baixe Nosso App </h2>
          <p>
            Baixe nosso aplicativo para melhor usufruir, você conseguira marcar
            as visitar com mais facilidade e gerenciar suas plantas.
          </p>
          <div className="button-field">
            <img src={google} alt="google play" title="google play" />
            <img src={apple} alt="app store" title="app store" />
          </div>
        </div>
      </S.Download>
      <S.planos id="planos">
        <h2>Nossos Planos</h2>
        <p>
          Conheça nossos planos abaixo, e veja qual mais lhe agrada e combina
          com você.
        </p>
        <div className="cards">
          <div className="card">
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
          <div className="card special">
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
          <div className="card">
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
