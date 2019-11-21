import React from 'react';
import './styles.css'

export default function ListItem({ data, setProduto }) {
  return (
    <li className="containerItem">
        <div className="container">
            <img src={ data.img }></img>
            <p>{ data.nome }</p>
            <p>{ data.valor }</p>
            <p>{ data.loja }</p>
        </div>
        <button onClick={setProduto} className="botao">Acompanhar</button>
    </li>)
}
