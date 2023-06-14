import MemeData from "/src/assets/MemeData";
import React from "react";
// let url;
function Inputs() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImg() {
    const MemeArr = MemeData.data.memes; //creating array of MemeData.jsx
    const RandomNum = Math.floor(Math.random() * MemeArr.length); //genrate no. in meme array
    setMemeImage(MemeArr[RandomNum].url);
  }

  return (
    <>
      <form className="grid mx-3 mt-8 gap-y-5">
        <input
          type="text"
          placeholder="  Top Text"
          className="max-w-prose h-8 border border-solid border-slate-800 rounded-md"
        />
        <input
          type="text"
          placeholder="  Bottom text"
          className="max-w-prose h-8 border border-solid border-slate-800 rounded-md"
        />
        <button
          onClick={getMemeImg}
          type="button"
          className="bg-slate-400 h-10 rounded-md font-medium hover:bg-slate-500"
        >
          Get a new meme image
        </button>
        <img src={memeImage} />
      </form>
    </>
  );
}
export default Inputs;
