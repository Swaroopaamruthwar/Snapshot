import React, { createContext, useContext, useState } from "react"
import axios from "axios"
const ImageContext = createContext()
const ContextProvider = ({ children }) => {
  const [images, setImages] = useState([])
  const fetchImages = async (search) => {
    const response = await axios.get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&tags=${search}&per_page=20&format=json&nojsoncallback=1`
    )
    console.log(response)
    setImages(response.data.photos.photo)
  }
  return <ImageContext.Provider value={{ images, fetchImages }}>
    {children}
  </ImageContext.Provider>
}

const useGlobalContext = () => {
  return useContext(ImageContext)
}
export { ContextProvider, ImageContext, useGlobalContext }
