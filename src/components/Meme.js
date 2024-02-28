import React from "react";

export default function Meme() {
  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Shut up" />
        <input
          className="form--input"
          type="text"
          placeholder="and take my money"
        />
        <button className="form--button">Get a new meme image 🖼</button>
      </div>
    </main>
  );
}
