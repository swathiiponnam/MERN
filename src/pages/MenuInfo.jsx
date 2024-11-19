import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchRestroMenu from '../util/customHooks/useFetchRestoMenu'
import useUserOnlineStatus from '../util/customHooks/useUserOnlineStatus'

function MenuInfo() {

    const { id } = useParams()
    console.log(id, "param")
    const myfetchedData = useFetchRestroMenu(id)
    console.log(myfetchedData);
    
    const myNetworkStatus = useUserOnlineStatus()
    console.log(myfetchedData);
    

    return myNetworkStatus ?
        <h1>
            Something is wrong with your Network....... please check 
        </h1> :(
        <div>
            <h1>hello From Menu</h1>
            {myfetchedData?.map((ele) => {
                return (
                   <div>
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${ele?.card?.info?.imageId}`}/>
                     <b>{ele.card?.info?.name}</b>
                     <p>{ele?.card?.info?.description}</p>
                    </div>

                    
                )
            })}
        </div>
    )

}

export default MenuInfo