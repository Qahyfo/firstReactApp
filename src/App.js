import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import axios from "axios";
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
  const [searchValue, setSeacrchValue] = useState('')


  useEffect(() => {
    axios.get('https://63c90f1d904f040a965532bc.mockapi.io/items').then(res => {
      setItems(res.data)
    })
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  const onChangeSearchInput = (event) => {
    setSeacrchValue(event.target.value)
  }

  return (
    <div className="wrapper clear" >
      <Header onClickCart={() => setCartOpened(true)} />
      {cartOpened ? <Sidebar items={cartItems}
        onClose={() => { setCartOpened(false) }} /> : null}
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1 className="" >{searchValue ? `Поиск по запросу ${searchValue}` : "Все кросовки"}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            {searchValue && <img className="cu-p clear" src="img/btn-remove.svg" alt="" onClick={() => setSeacrchValue('')} />}
            <input value={searchValue} onChange={onChangeSearchInput} placeholder="Поиск" />
          </div>
        </div>

        <div className="d-flex">
          {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((obj, index) => (
              <Card onClick={() => console.log(obj)}
                key={index}
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
