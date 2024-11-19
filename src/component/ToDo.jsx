import React, { Fragment, useState } from 'react'

function ToDo() {

    let [inputItem, setInputItem] = useState("")
    let [displayItems, setDisplayItems] = useState([])

    const handleChange = (e) => {
        console.log(e.target.value);
        setInputItem(e.target.value)
    }

    const handleOnClick = (e) => {
        e.preventDefault()
        if (inputItem === "") {
            alert("please enter an item")
        }
        else {
            setDisplayItems([...displayItems, inputItem])
        }
        setInputItem("")
    }

    let handleDelete = (delIndex) => {
        let updatedArray = displayItems.filter((value, index) => delIndex !== index)
        setDisplayItems(updatedArray)

    }


    return (
        <div className='myToDoDiv'>
            <h1 >TODO LIST</h1>
            <form className='myForm' style={{ color: "whitesmoke", backgroundColor: "cadetblue" }}>
                <input type="text" 
                    name="item"
                    placeholder='   ADD AN ITEM' 
                    value={inputItem} 
                    onChange={handleChange} />
                <button className='addBtn' onClick={handleOnClick}> Add Item</button>

                <div className='delContainer'>
                {
                displayItems.map((ele, ind) => {
                    return (
                        <Fragment key={ind}>
                            <p>{ele}</p>
                            <button className='deleteBtn' onClick={() => handleDelete(ind)}>Delete</button>
                        </Fragment>
                    )

                })
                
            }
            </div>
            </form>


            
        </div>
    )
}

export default ToDo