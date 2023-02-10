import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <div className="d-flex justify-content-evenly my-5">
      <NavLink
         className="d-flex align-items-center justify-content-center text-decoration-none text-white bg-secondary text-center rounded-circle"
         style={{ width: "6rem", height: "6rem" }}
        to={"/cuisine/Italian"}
      >
        <div>
        <FaPizzaSlice />
        <h6>Italian</h6>
        </div>
        
      </NavLink>
      <NavLink
        className="d-flex align-items-center justify-content-center text-decoration-none text-white bg-secondary text-center rounded-circle"
        style={{ width: "6rem", height: "6rem" }}
        to={"/cuisine/American"}
      >
        <div>
          <FaHamburger />
          <h6>American</h6>
        </div>
      </NavLink>
      <NavLink
       className="d-flex align-items-center justify-content-center text-decoration-none text-white bg-secondary text-center rounded-circle"
       style={{ width: "6rem", height: "6rem" }}
        to={"/cuisine/Thai"}
      >
        <div>
        <GiNoodles />
        <h6>Thai</h6>
        </div>
        
      </NavLink>
      <NavLink
       className="d-flex align-items-center justify-content-center text-decoration-none text-white bg-secondary text-center rounded-circle"
       style={{ width: "6rem", height: "6rem" }}
        to={"/cuisine/Japanese"}
      >
        <div>
        <GiChopsticks />
        <h6>Japanese</h6>
        </div>
        
      </NavLink>
    </div>
  );
}

export default Categories;
