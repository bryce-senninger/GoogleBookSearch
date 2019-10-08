import React from "react";
import "./style.css";

function SearchBar() {
  return (
    <form>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Input Title Here"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
