import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import { Card } from "./components/Card"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";
//import { Sidebar } from "./components/Sidebar";
/*
const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "img/sneakers/1.jpg"
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    imageUrl: "img/sneakers/2.jpg"
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "img/sneakers/3.jpg"
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "img/sneakers/4.jpg"
  }
]
*/
function App() {
  const [cartOpened, setCartOpened] = useState(false)
  const [items, setItems] = useState([]) // Хранение карточек
  const [cartItems, setCartItems] = useState([])
  const [delCart, setDelCart] = useState([])

  useEffect(() => {
    fetch('https://63c90f1d904f040a965532bc.mockapi.io/items').then((res) => {
      return res.json()
    }).then((json) => {
      setItems(json)
    })
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  const onDeleteToCart = (obj) => {

  }

  return (
    <div className="wrapper clear" >
      <Header onClickCart={() => setCartOpened(true)} />
      {cartOpened ? <Sidebar items={cartItems} onDelete={onDeleteToCart}
        onClose={() => { setCartOpened(false) }} /> : null}
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск" />
          </div>
        </div>

        <div className="d-flex">
          {items.map((obj) => (
            <Card onClick={() => console.log(obj)}
              title={obj.title}
              price={obj.price}
              onPlus={(obj) => onAddToCart(obj)}
              imageUrl={obj.imageUrl} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
