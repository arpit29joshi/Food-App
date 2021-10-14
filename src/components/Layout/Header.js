import React,{Fragment} from "react";
import mealsImages from '../../assets/meals.jpg';
import "./Header.css";
import HeaderCart from "./HeaderCart";
function Header(props){
    return (
        <Fragment>
            <header className="header">
                <h1>Meals</h1>
                <HeaderCart onclick={props.onclick}></HeaderCart>
            </header>
            <div className="main-image">
                <img src={mealsImages} alt='A table of food'/>
            </div>
        </Fragment>
    );
}
export default Header;