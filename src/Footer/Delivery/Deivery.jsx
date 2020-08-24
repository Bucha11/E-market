import React from "react";
import s from "./Delivery.module.css";
import { FaTruck, FaPhoneAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

export const Delivery = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.delivery}>
        <div className={s.shipping}>
          <IconContext.Provider
            value={{
              style: {
                color: "#4cb1ca",
                verticalAlign: "bottom",

                width: "45px",
                height: "45px",
              },
            }}
          >
            <div className={s.icon}>
              <FaTruck />
            </div>
          </IconContext.Provider>
          Free shipping on orders over $100
        </div>
        <div className={s.call}>
          <IconContext.Provider
            value={{
              style: {
                color: "#4cb1ca",
                verticalAlign: "bottom",

                width: "45px",
                height: "45px",
              },
            }}
          >
            <div className={s.icon}>
              <FaPhoneAlt />
            </div>
          </IconContext.Provider>
          Call us! Toll free - 409-8888-00999
        </div>
      </div>
    </div>
  );
};
