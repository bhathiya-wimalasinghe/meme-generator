import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memeArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: memeArray[randomNumber].url,
    }));
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
      <img src={meme.randomImage} className="meme--image" />
    </main>
  );
}
