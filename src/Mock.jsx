import React, { useContext, useEffect, useState } from 'react'
// import { myContextExample } from './util/contextapi'
import { useDispatch, useSelector } from 'react-redux'
import { addList } from './util/redux/slices/practiceSlice'
import axios from 'axios'
function Mock() {

    // let {place,changePlace} = useContext(myContextExample)

    const data = useSelector((store)=> store.practice.item)
    const dispatch = useDispatch()

    const [users,setUsers]= useState({
        username : "",
        password : ""
    })

    
    const {username,password} = users

    const handleChange =(e)=>{
        const {name,value} = e.target.value
        setUsers({...users,[name]:value})
        console.log(users);
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(users);
        
    }
    // UseEffect hook example

    const [userData,setUserData] = useState([])

    const fetchApi = async ()=>{
        await axios.get("https://dummyjson.com/users")
        .then((res)=>{
            // const finalData = response.users
            console.log(res);
            
        setUserData(res.data.users)

        })
        .catch((err)=>{
            console.log(err);
            
        })
        // const data =await response.json()
        // console.log(data);
        
    }

    useEffect(()=>{
        fetchApi()
    },[])


  return (
    <div>
        <h1>UseEffect hook example</h1>
        {
            userData.map((ele)=>{
                return(
                    <p>{ele.firstName}</p>
                )
            })
        }

        {/* useContext example */}

        {/* <div>
            <h1>useContext example</h1>
            <label>My Place: </label>
            <input type="text" name='place' value={place} 
            onChange={(e)=>{changePlace(e.target.value)}}/>
            <p>{place}</p>
        </div>

        <div>
            <h1>redux example</h1>
            <button onClick={()=>{dispatch(addList(data))}}>Add</button>
        </div> */}

        <div>
           <form onSubmit={handleSubmit}>
           <input type="text" placeholder='username' value={username} onChange={handleChange}/>
            <input type="text" placeholder='password' value={password} onChange={handleChange} />
            <button type='submit'>submit</button>
            <p>{username}</p>
           </form>
        </div>
    </div>
  )
}

export default Mock
