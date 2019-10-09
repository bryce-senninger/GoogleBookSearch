import React from "react";

function BookCards() {
  return (
    <div className="card">
      <img src="..." className="card-img-top bookImage" />
      <div className="card-body">
        <h5 className="card-title bookTitle">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Save
        </a>
      </div>
    </div>
  );
}

export default BookCards;
