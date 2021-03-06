import React from "react";
import gla from "../../../img/cart_id_1.png";
import s from "./Card.module.css";
import { FaShoppingBasket } from "react-icons/fa";
import { IconContext } from "react-icons";
import {addToCart} from '../../../Redux/Reducers/cartReducer'
import { useDispatch } from "react-redux";

export const Card = (props) => {

  const dispatch=useDispatch()
  return (
    <div className={s.card}>
      <div className={s.wrapper}>
        <img src={gla} alt="glasses"></img>
        <div className={s.cardText}>
          <div className={s.desc}>
            <p>{props.name}</p>
            <p className={s.price}>${props.price}</p>
          </div>
          <IconContext.Provider
            value={{
              style: {
                color: "white",
                verticalAlign: "middle",
                width: "2em",
                height: "2em",

               
              },
            }}
          >
            <button className={s.btn} onClick={()=>{dispatch(addToCart(props))}}>
              <FaShoppingBasket />
            </button>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};
