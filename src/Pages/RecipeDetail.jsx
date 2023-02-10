import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {IoMdArrowRoundBack} from 'react-icons/io'

function RecipeDetail() {
  const [detail, setDetail] = useState({});

  const [activeTab, setActiveTab] = useState("Instructions");
  let params = useParams();

  const getDetail = async (name) => {
  //  //const data = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=7e008784b5da4da28b68fa666b1aebd4`);
  //   const recipes = await data.json();
  //   setDetail(recipes);
  //   console.log(detail);
  };

  useEffect(() => {
    getDetail(params.name);
  }, [params.name]);

  return (
    <div>
      <div>
      <NavLink
         className="text-decoration-none text-white bg-secondary text-center rounded-2 p-2"
         
        to={"/"}
      >
        <IoMdArrowRoundBack />
        
      </NavLink>
      </div>
      
      <div className="row mt-4">
        <div className="col-6">
          <h3>{detail.title}</h3>
          <img
            class="card-img-top rounded w-100 h-100"
            src={detail.image}
            alt="Card image cap"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="col-6">
          <button
            className={
              activeTab === "Instructions"
                ? "btn btn-outline-secondary mx-3 my-2 active"
                : "btn btn-outline-secondary mx-3 my-2"
            }
            onClick={() => setActiveTab("Instructions")}
          >
            Instructions
          </button>
          <button
            className={
              activeTab === "Ingredients"
                ? "btn btn-outline-secondary mx-3 my-2 active"
                : "btn btn-outline-secondary mx-3 my-2"
            }
            onClick={() => setActiveTab("Ingredients")}
          >
            Ingredients
          </button>

          <div>
            {activeTab === "Instructions" ? (
              <div>
                <p dangerouslySetInnerHTML={{ __html: detail.summary }}></p>
                <h6 dangerouslySetInnerHTML={{ __html: detail.instructions }}></h6>
              </div>
             
            ) : (
              <div>
                {detail.extendedIngredients.map((item) => {
                  return <li>{item.original}</li>;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
