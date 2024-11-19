import React, { useState, useEffect, useContext, useRef } from 'react'
import Card from '../commonComponents/Card'
import ShimmerCard from '../commonComponents/ShimmerCard';
import { hocData } from '../util/hocData';
import { myContext } from '../App';
// import products from '../util/mockData'



function Body() {

  let [productData, setProductData] = useState([]);
  let [productFilter, setProductFilter] = useState([]);
  let [textInput, setTextInput] = useState('')

  const myData = async () => {
    const data = await fetch("https://dummyjson.com/carts");
    const promiseData = await data.json()
    const cartData = promiseData.carts.map((ele) => {
      return ele.products
    })
    const actualData = cartData.flat()

    setProductData(actualData)
    setProductFilter(actualData)
  }

  // myData();

  useEffect(() => {
    myData();
  }, [])

  function filter2() {

    let filteredData = productFilter.filter((ele) => {
      return ele.price < 10000
    })
    setProductData(filteredData)
  }

  function filter3() {

    let filteredData = productFilter.filter((ele) => {
      return ele.price > 10000
    })
    setProductData(filteredData)
  }

  function handleSearch() {
    let filteredData = productFilter.filter((ele) => {
      let title = ele.title.toUpperCase()
      let searchText = textInput.toUpperCase()
      return title.includes(searchText)
    })
    setProductData(filteredData)  //we're displaying productData using map i.e. updator function used 
  }



  // hoc code

  const CardEnhanced = hocData(Card)

// Context api

const {dataName,changeData} = useContext(myContext)


// use Ref code

const refVal = useRef(null)

// using use ref we're trying to get previous value when state updates

const [count,setCount] = useState(0)
const prevCount = useRef(0)

useEffect(()=>{
  prevCount.current = count
},[count])

  return (
    <div className='body'>

      {/* context api */}
      <div>
        <label htmlFor="">context api dynamic change</label>
        <input type="text" className='p-2 m-2 border' value={dataName} onChange={(e)=>{
            changeData(e.target.value)
        }}/>
      </div>

      {/* use ref code */}

      <div>
        <input type="text" placeholder='give ref Input' ref={refVal} />
        <button className='m-2 p-2 bg-orange-500 text-slate-200 rounded-lg'
        onClick={(e)=>{
          refVal.current.focus()
        }}>Click here to get focus</button>
      </div>

      {/* use ref code to update state and print updated and previous count */}

      <div>
        <p>Count : {count}</p>
        <p>Previous Count : {prevCount.current}</p>
        <button onClick={()=>{
          setCount(count+1)
        }}>Update count </button>
      </div>

      <article className='search'>
        <div>
          <input type="text" value={textInput} onChange={(e) => {
            setTextInput(e.target.value)
          }} />
          <button onClick={handleSearch}>Search</button>
        </div>

        <button onClick={() => {
          let filteredData = productFilter.filter((ele) => {
            return ele.price < 500
          })
          setProductData(filteredData)
        }}>Less Than 500/-</button>
        <button onClick={filter2}>Less Than 10000/-</button>
        <button onClick={filter3}>More than 10000/-</button>
      </article>
      <article className='cardHolder'>
        {/* <Card/> */}
        {
          // productData.map(ele=><Card data = {ele} key = {`${ele.id}`*Math.random()}/>)
          // (productData.length>0) ? productData.map(ele=><Card data = {ele} key = {`${ele.id}`*Math.random()}/>) :Array(4).fill().map(()=><ShimmerCard/>) 

          // (productData.length>0) ? productData.map(ele=><Card data = {ele} key = {`${ele.id}`*Math.random()}/>) :<img src="https://dev-to-uploads.s3.amazonaws.com/i/gqmymopg8bignlcfhvcx.gif" />


          // code for hoc
          (productData.length > 0) ? productData.map((ele, index) => {
            return (
              (index % 2 !== 0) ? (<Card data={ele} key={`${ele.id}` * Math.random()} />) :
                (<CardEnhanced data={ele} key={`${ele.id}` * Math.random()} />)
            )
          }) : Array(4).fill().map(() => <ShimmerCard />)

        }
      </article>
    </div>
  )
}

export default Body