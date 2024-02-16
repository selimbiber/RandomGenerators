import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "ONE DOES NOT SIMPLY",
    bottomText: "WALK INTO MORDOR",
    altText: "One Does Not Simply",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const get = await res.json();
      setAllMemes(get.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const name = allMemes[randomNumber].name;
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      altText: name,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main className="flex flex-col items-center justify-center px-4 m-auto gap-y-8">
      <div className="flex flex-col gap-y-4">
        <fieldset className="grid grid-cols-2 gap-8">
          <label className="flex flex-col font-semibold">
            Top Text
            <input
              type="text"
              className="w-40 p-1 font-normal border sm:w-56"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col font-semibold">
            Bottom Text
            <input
              type="text"
              className="w-40 p-1 font-normal border sm:w-56"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <button
          className="bg-gradient-to-r from-[#672280] to-[#A626D3] py-4 text-white font-semibold hover:opacity-80 rounded duration-150 transition-opacity"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="relative font-['Karla']">
        <img src={meme.randomImage} className="mx-auto rounded h-72" alt={meme.altText} />
        <h3 className="absolute inset-x-2 grid font-semibold text-white place-items-center [text-shadow:2px_2px_4px_var(--tw-shadow-color)] shadow-black top-4 text-[150%] uppercase">
          {meme.topText}
        </h3>
        <h3 className="absolute inset-x-2 grid font-semibold text-white place-items-center [text-shadow:2px_2px_4px_var(--tw-shadow-color)] shadow-black bottom-4 text-[150%] uppercase">
          {meme.bottomText}
        </h3>
      </div>
    </main>
  );
}
