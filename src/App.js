import React, { useState, useEffect } from "react";

import ListItem from "./Components/ListItem";
import Modal from "./Components/Modal";
import "./styles.css";

import instance from "./api";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [object, setObject] = useState({});
  const [data, setData] = useState([
    {
      img:
        "https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133776/0/133776099_1GG.png",
      nome: "Teste",
      valor: 2,
      loja: "americanas",
      link:
        "https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133776/0/133776099_1GG.png"
    }
  ]);
  // const [filterData, setFilterData] = useState([]);

  const getProdutos = async () => {
    try {
      const response = await instance.get("/produtos");

      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProdutos();
  }, []);

  const setProduto = isObject => {
    setObject(isObject);
    setVisible(!visible);
  };

  // const filtrarArray = (filtro) => {
  //   const novoArray = data.filter(valor => valor.nome === 1);
  //   setFilterData(novoArray);
  // }

  return (
    <>
      <Modal visible={visible} setVisible={setVisible} produto={object} />
      <div className="center">
        <ul className="list">
          {data.map(data => {
            return <ListItem setProduto={() => setProduto(data)} data={data} />;
          })}
        </ul>
      </div>
    </>
  );
}
