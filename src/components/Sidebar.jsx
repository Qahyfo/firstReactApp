export function Sidebar() {
  return (
    <div className="overlay">
      <div className="sidebar">
        <h2 className="mb-30">Корзина</h2>

        <div className="items">
          <div className="cart-item d-flex align-center mb-25">
            <div
              style={{ backgroundImage: "url(img/sneakers/1.jpg)" }}
              className="cart-item__img"
            ></div>
            <div className="mr-20 flex">
              <p className="">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="remove-btn mr-20"
              src="img/btn-remove.svg"
              alt="Add"
            />
          </div>

          <div className="cart-item d-flex align-center mb-25">
            <div
              style={{ backgroundImage: "url(img/sneakers/1.jpg)" }}
              className="cart-item__img"
            ></div>
            <div className="mr-20 flex">
              <p className="">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="remove-btn mr-20"
              src="img/btn-remove.svg"
              alt="Add"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
