export function Sidebar({ onClose, items = [], onDelete }) {


  return (
    <div className="  overlay">
      <div className="sidebar">
        <h2 className="d-flex justify-around mb-30">
          Корзина{" "}
          <img
            className="cu-p"
            src="img/btn-remove.svg"
            alt=""
            onClick={onClose}
          />
        </h2>

        <div className="items">
          {
            items.map((obj) => (
              <div className="cart-item d-flex align-center mb-25">
                <div
                  style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  className="cart-item__img"
                ></div>
                <div className="mr-20 flex">
                  <p className="">{obj.title}</p>
                  <b>{obj.price}</b>
                </div>
                <img
                  className="remove-btn mr-20"
                  src="img/btn-remove.svg"
                  alt="Add"
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
