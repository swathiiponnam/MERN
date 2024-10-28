import React, { useState } from 'react'
import Card from '../commonComponents/Card'
import products from '../util/mockData'

 

function Body() {

    let [productData,setProductData] = useState(products);
    

    // function filter1(){      
    //   let filteredData = productData.filter((ele)=>{
    //     return ele.price >500
    //   })
    //   setProductData(filteredData)
    // }

    function filter2(){
      
      let filteredData = products.filter((ele)=>{
        return ele.price < 10000
      })
      setProductData(filteredData)
    }

    function filter3(){
      
      let filteredData = products.filter((ele)=>{
        return ele.price >10000
      })
      setProductData(filteredData)
    }

  return (
    <div className='body'>
        <article className='search'>
            <button onClick={()=>{
              let filteredData = products.filter((ele) => {
                return ele.price < 500})
                setProductData(filteredData)
            }}>Less Than 500/-</button>
            <button onClick={filter2}>Less Than 10000/-</button>
            <button onClick={filter3}>More than 10000/-</button>
        </article>
        <article className='cardHolder'>
            {/* <Card/> */}
            {
                productData.map(ele=><Card data = {ele}/>)
            }
        </article>
    </div>
  )
}

export default Body