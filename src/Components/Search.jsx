import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`searched/${input}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center position-relative w-100 my-5"
      >
        <div className="w-25 d-flex align-items-center">
          <FaSearch className="bg-secondary text-white ms-2 position-absolute"></FaSearch>
          <input
            onChange={(e) => setInput(e.target.value)}
            className="form-control p-2 bg-secondary text-white rounded w-100"
            type="text"
            value={input}
          />
        </div>
      </form>
    </>
  );
}

export default Search;
