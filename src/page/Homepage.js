import React from 'react'
import Search from '../components/Search'
import {useState , useEffect} from "react"
import Picture from '../components/Picture'

const Homepage = ({myPhoto,setMyPhoto}) => {
    let [input , setInput] = useState("");
    let [data , setData] = useState(null);
    let [page,setPage] = useState(2);
    let [currentSearch,setCurrentSearch] = useState("");
    const key = "563492ad6f9170000100000119334c7c71ac4029a017dbee1e9bd248"
    const initialURL ="https://api.pexels.com/v1/curated?page=1&per_page=15"
    const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
    //search function
    const search =async (url)=>{
        setCurrentSearch(input);
        if(input==""){
            url =initialURL
        }else{
            url = searchURL
        }
        const fetchData = await fetch(url,{
            method:"GET",
            headers:{
                Accept:"application/json",
                Authorization: key
            },
        });
        let parsedData = await fetchData.json();
        console.log(parsedData)
        setData(parsedData.photos)
    };
    //useEffect
    useEffect(()=>{
        search();
    },[]);
    //loadMore function
    const loadMore = async (url)=>{
        if(currentSearch==""){
            url = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`
        }else{
            url = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`;
        }
        const fetchData = await fetch(url,{
            method:"GET",
            headers:{
                Accept:"application/json",
                Authorization: key
            },
        });
        let parsedData = await fetchData.json();
        console.log(parsedData)
        setData(data.concat(parsedData.photos));
        setPage(page+1);
    }
    return (
        <div>
            <Search search = {search} input={input} setInput={setInput}/>
            <div className="pictures">
                {data&&
                data.map(d=>{
                    return<Picture d={d} myPhoto={myPhoto} setMyPhoto={setMyPhoto}/>
                })
                }
            </div>
            <div className="loadMore">
            <button onClick={loadMore} >載入更多</button>   
            </div>     
        </div>
    )
}

export default Homepage
