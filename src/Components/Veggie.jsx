import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Veggie() {
    const [veggie, setVeggie] = useState();

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=7e008784b5da4da28b68fa666b1aebd4&number=6&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      console.log(data);
      setVeggie(data.recipes);
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);
  return (
    <>
    <h3 className="mt-3, mb-1">Our Vegetarian Picks</h3>
      <Splide options={{
        perPage:3,
        arrows: false,
        pagination: false,
        drag : "free",
        gap: "2rem"
        }}>
        {veggie?.map((item) => {
          return (
            <>
              <SplideSlide>
                <div className="card shadow mb-5 border-0 position-relative text-wrap" style={{height: '30vh'}}>
                <Link to={`/recipe/${item.id}`}>
                <p className="fs-6 fw-light p-1 rounded text-white position-absolute bottom-0 start-0 bg-secondary bg-opacity-50">{item.title}</p>
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
  )
}

export default Veggie