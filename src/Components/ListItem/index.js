import React from 'react';
import './styles.css'

export default function ListItem({ data, setProduto }) {
  return (
    <li className="containerItem">
        <div className="container">
            <img src={data.image} width="100px"></img>
            <p>{ data.nomeProduto }</p>
            <p>{ data.preco }</p>
            <p>{ data.loja }</p>
        </div>
        <button onClick={setProduto} className="botao">Acompanhar</button>
    </li>)
}
