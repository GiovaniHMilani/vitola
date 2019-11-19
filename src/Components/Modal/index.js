import React from 'react';
import './styles.css'

export default function Modal({ visible, produto, setVisible }) {
  console.log(produto)
  return (
    <div className={ visible ? "bgContainer visible" : "bgContainer notVisible" } >
      <div className="isModal">
        <div className="produto">
          <img src={produto.image}  width="200"/>
          <div className="dadosProduto">
            <h1>{produto.nomeProduto}</h1>
            <p>{produto.preco}</p>
            <small>{produto.loja}</small>
            <button onClick={() => setVisible(false)}>X</button>
          </div>
        </div>
      </div>
    </div>
  );
}
