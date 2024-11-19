
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { FaRegStar } from "react-icons/fa";
// import axios from 'axios'

function Swiggy() {

    const [swiggyData, setSwiggyData] = useState([])
    const navigate = useNavigate()

    const fetchApi = async () => {
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const data = await res.json();
        // const data = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const actualData = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setSwiggyData(actualData)
        console.log(actualData);

    }

    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <div>
            <h1>Swiggy App Api </h1>
            <div style={{ display: 'flex', gap: "50px", flexWrap: "wrap" }}
                className=''>
                {
                    swiggyData?.map((ele) => (


                        <div className='h-60 w-64' key={ele.info.id} onClick={() => navigate(`/menuinfo/${ele?.info?.id}`)}>
                            <img  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${ele.info?.cloudinaryImageId}`} alt="..." 
                            className='h-48 w-80'/>
                            <b className='text-lg'>{ele.info.name}</b>
                            <p><span><FaRegStar /></span> <span>{ele.info.avgRating} . {ele.info.sla.slaString}</span></p>
                            <p>{ele.info.cuisines}</p>
                            <p>{ele.info.locality}</p>

                        </div>

                    )

                    )
                }
            </div>
        </div>
    )
}

export default Swiggy