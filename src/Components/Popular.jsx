import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState();

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        // `https://api.spoonacular.com/recipes/random?apiKey=7e008784b5da4da28b68fa666b1aebd4&number=8`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      console.log(data);
      setPopular(data.recipes);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <>
      <h3 className="mt-3, mb-1">Our Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {popular?.map((item) => {
          return (
            <>
              <SplideSlide>
                
                <div
                  class="card shadow mb-5 border-0 position-relative text-wrap"
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
              </SplideSlide>
            </>
          );
        })}
      </Splide>
    </>
  );

//   const Gradient = styled.div`
//     position: absolute;
//     width: 100%;
//     heigth: 100%;
//     background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
//   `;
}

export default Popular;
