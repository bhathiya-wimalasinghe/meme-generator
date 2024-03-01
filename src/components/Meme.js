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
      <div class="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">This is sample topText</h2>
        <h2 className="meme--text bottom">This is sample bottomText</h2>
      </div>
    </main>
  );
}
