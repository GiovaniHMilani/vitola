import React from "react";
import "./styles.css";

export default function ListItem({ data, setProduto }) {
  return (
    <li className="containerItem">
      <div className="container">
        <img src={data.img} alt="Imagem do produto"></img>
        <p>{data.nome}</p>
        <p>{data.valor}</p>
        <p>{data.loja}</p>
      </div>
      <div className="containerbotao">
        <button onClick={setProduto} className="botao">
          Acompanhar
        </button>
        <a
          href={data.link}
          rel="noopener noreferrer"
          target="_blank"
          className="botaoRedirect"
        >
          Ver na Loja
        </a>
      </div>
    </li>
  );
}
