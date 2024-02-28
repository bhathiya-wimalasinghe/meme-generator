import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memeArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);

    setMemeImage(memeArray[randomNumber].url);
  }

  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Shut up" />
        <input
          className="form--input"
          type="text"
          placeholder="and take my money"
        />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} className="meme--image" />
    </main>
  );
}
