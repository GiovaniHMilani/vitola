import React, { useState } from 'react';

import ListItem from './Components/ListItem'
import Modal from './Components/Modal'
import './styles.css'

export default function App() {
  const [visible, setVisible] = useState(false);
  const [object, setObject] = useState({});

  const data = [
    { nomeProduto: "iphoneLoko", preco: 12.50, loja: "MalacoAssassino", image: "https://static.carrefour.com.br/medias/sys_master/images/images/hfe/h8d/h00/h00/13331580190750.jpg"},
    { nomeProduto: "iphoneLoko", preco: 12.50, loja: "MalacoAssassino", image: "https://static.carrefour.com.br/medias/sys_master/images/images/hfe/h8d/h00/h00/13331580190750.jpg"},
    { nomeProduto: "iphoneLoko", preco: 12.50, loja: "MalacoAssassino", image: "https://static.carrefour.com.br/medias/sys_master/images/images/hfe/h8d/h00/h00/13331580190750.jpg"},
    { nomeProduto: "iphoneLoko", preco: 12.50, loja: "MalacoAssassino", image: "https://static.carrefour.com.br/medias/sys_master/images/images/hfe/h8d/h00/h00/13331580190750.jpg"},
    { nomeProduto: "iphoneLoko", preco: 12.50, loja: "MalacoAssassino", image: "https://static.carrefour.com.br/medias/sys_master/images/images/hfe/h8d/h00/h00/13331580190750.jpg"},
    { nomeProduto: "iphoneLoko", preco: 12.50, loja: "MalacoAssassino", image: "https://static.carrefour.com.br/medias/sys_master/images/images/hfe/h8d/h00/h00/13331580190750.jpg"},
    { nomeProduto: "iphoneLoko", preco: 12.50, loja: "MalacoAssassino", image: "https://static.carrefour.com.br/medias/sys_master/images/images/hfe/h8d/h00/h00/13331580190750.jpg"},
    { nomeProduto: "iphoneLoko", preco: 12.50, loja: "MalacoAssassino", image: "https://static.carrefour.com.br/medias/sys_master/images/images/hfe/h8d/h00/h00/13331580190750.jpg"}
    ]

  const setProduto = (isObject) => {
    setObject(isObject);
    setVisible(!visible)
  }

  return (
    <>
    <Modal visible={visible} setVisible={setVisible} produto={object}/>
    <ul className="list">
      {data.map(data => {
        return <ListItem setProduto={() => setProduto(data)} data={data} />
      })}
    </ul>
    </>
  );
}
