import React from "react";
import "./styles.css";

export default function Modal({ visible, produto, setVisible }) {
  console.log(produto);
  return (
    <div className={visible ? "bgContainer visible" : "bgContainer notVisible"}>
      <div className="isModal">
        <div className="produto">
          <img src={produto.img} />
          <div className="dadosProduto">
            <h1>{produto.nome}</h1>
            <p>{produto.valor}</p>
            <small>{produto.loja}</small>
            <button onClick={() => setVisible(false)}>X</button>
          </div>
        </div>
        <div className="conteudoModal">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Email" />
        </div>
        <div className="areaButton">
          <button>Acompanhar</button>
        </div>
      </div>
    </div>
  );
}
