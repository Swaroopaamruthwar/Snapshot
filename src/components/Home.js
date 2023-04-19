import React, { useState, useEffect } from "react"
import { useGlobalContext } from "./context/Images"
import { AiOutlineSearch } from "react-icons/ai";
import "../App.css"
// Define the main App component
function Home() {
  const [search, setSearch] = useState("")
  const [text, setText] = useState("")
  // Set up state for selected category and image data
  const { fetchImages, images } = useGlobalContext()

  const callApi = () => {
    fetchImages(search)
    setTimeout(() => {
      setSearch("")
    }, 1000)
  }


  useEffect(() => {
    setTimeout(() => {
      fetchImages(text)
    }, 2000);
  }, [text])
  return (
    <div className="container">
      <h1>Snapshot</h1>
      <div className="col">
        <div>
          <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search..." />
          <button onClick={callApi} className="btn"><AiOutlineSearch /></button>
        </div>
        <div className="btns">
          <button onClick={(e) => setText(e.target.id)} id="mountain">Mountain</button>
          <button onClick={(e) => setText(e.target.id)} id="beaches">Beaches</button>
          <button onClick={(e) => setText(e.target.id)} id="birds">Birds</button>
          <button onClick={(e) => setText(e.target.id)} id="food">Food</button>
        </div>
      </div>

      <div>
        {search === "" ?
          <div>
            {text === "mountain" ? <h1> Mountain Pictures</h1> : ""}
            {text === "beaches" ? <h1> Beaches Pictures</h1> : ""}
            {text === "birds" ? <h1>Birds Pictures</h1> : ""}
            {text === "food" ? <h1>Food Pictures</h1> : ""}
          </div>
          : ""

        }
        {
          images.map((image) => (
            <img
              key={image.id}
              src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
              alt={image.title}
              className="img"
            />
          ))
        }
      </div>

    </div >

  )
}

export default Home
