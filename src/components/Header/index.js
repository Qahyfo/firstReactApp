export function Header(props) {
    console.log(props)
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="img/logo.png" alt="Logotype" />
                <div className="headerInfo">
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-40 cu-p">
                    <img width={18} height={18} src="img/basket.svg" alt="" />
                    <span>1205</span>
                </li>
                <li>
                    <img width={18} height={18} src="img/userpic.svg" alt="" />
                </li>
            </ul>
        </header>
    )

};

