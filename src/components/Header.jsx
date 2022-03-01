import React from "react";
import s from './Header.module.css';

function Header() {
    return (
        <header className={s.header}>
            <img className={s.headerImg} src='https://upload.wikimedia.org/wikipedia/commons/b/b3/%D0%A1%D0%9A%D0%90%D0%99_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_2016_%D1%80%D1%96%D0%BA.jpg' />
        </header>
    );
}

export default Header;