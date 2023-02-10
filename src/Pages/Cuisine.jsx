import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import {IoMdArrowRoundBack} from 'react-icons/io'

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  const getCuisine = async (name) => {
    //const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7e008784b5da4da28b68fa666b1aebd4&cuisine=${name}`)
    // const recipes = await data.json()
    // setCuisine(recipes.results)
    // console.log(cuisine)
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <>
      <div>
        <NavLink
          className="text-decoration-none text-white bg-secondary text-center rounded-2 p-2"
          to={"/"}
        >
          <IoMdArrowRoundBack />
        </NavLink>
      </div>
      <div className="row mt-4">
        {cuisine?.map((item) => {
          return (
            <div className="col-3">
              <div
                className="card shadow mb-5 border-0 position-relative text-wrap"
                style={{ height: "30vh" }}
              >
                <Link to={`/recipe/${item.id}`}>
                  <p className="fs-6 fw-light p-1 rounded text-white position-absolute bottom-0 start-0 bg-secondary bg-opacity-50">
                    {item.title}
                  </p>
                  <img
                    class="card-img-top rounded w-100 h-100"
                    src={item.image}
                    alt="Card image cap"
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cuisine;
