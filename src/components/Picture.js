import React from 'react'
import { useState } from 'react'

const Picture = ({d,myPhoto,setMyPhoto}) => {
    const downloadPhoto = async ()=>{
        setMyPhoto([...myPhoto,d]);
    }
    return (
            <div className="picture">
                <p>作者:{d.photographer}</p>
                <div className="picturecontainer">
                 <img src={d.src.large} alt="圖片" />
                </div>
                <a target="_blank" href={d.src.large} onClick={downloadPhoto} >下載圖片</a>
            </div>
    )
} 
export default Picture
