import { Card } from "./components/Card"
import { Header } from "./components/Header"
//import { Sidebar } from "./components/Sidebar";

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: 'img/sneakers/1.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 15600,
    imageUrl: 'img/sneakers/2.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    imageUrl: 'img/sneakers/3.jpg'
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imageUrl: 'img/sneakers/4.jpg'
  }
]

function App() {


  return (
    <div className="wrapper clear" >
      <Header />

      <div className="content p-40">
        <div className='d-flex justify-between align-center mb-40'>
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск" />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card onClick={() => console.log(obj)} title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}

        </div>

      </div>
    </div >
  );
}

export default App;