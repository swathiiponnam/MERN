import { useEffect, useState } from "react"
import { myRestroMenu } from "../constants"

const useFetchRestroMenu = (myrestroId)=>{

    console.log(myrestroId ,'my id');
    
    const [menuData,setMenuData] = useState([])
    const fetchRestData = async ()=>{
        const data = await fetch(`${myRestroMenu}${myrestroId}`)

        // const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${myrestroId}&catalog_qa=undefined&submitAction=ENTER`)
        console.log(data);
        
        const myMenuData = await data.json();
        console.log(myMenuData, "fetchedData");
        const myMenuList = myMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

        console.log(myMenuList);
        
        setMenuData(myMenuList)

        
    }
    
    useEffect(()=>{
        fetchRestData();
    },[])

    return menuData
}

export default useFetchRestroMenu