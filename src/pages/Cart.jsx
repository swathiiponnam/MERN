import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { deleteItem } from '../util/redux/slices/cartSlice'

function Cart() {
    const dispatch = useDispatch()
    const selectedCartData = useSelector((store) => store.cart.items)
    console.log(selectedCartData);
    
    return (
        <div className='w-[80%] m-auto'>
            {selectedCartData.length > 0 ? (
                <div>
                    {selectedCartData.map((ele) => {
                        return (
                            <div className='w-[70%] flex justify-between bg-indigo-300 p-2 rounded-lg m-2'>
                                <div>
                                    <p className='text-white'><span className='text-lg font-bold'>Name:</span> <span className='font-mono text-xl'>{ele.title}</span></p>
                                    <p className='text-white'><span className='text-lg font-bold'>Price:</span> <span className='font-mono text-xl'>{ele.price}</span>/-</p>
                                    <button onClick={()=>{dispatch(deleteItem(ele.id))}} className='m-2 p-2 bg-red-700 text-white rounded-lg'>Remove Item</button>
                                </div>
                                <div className='h-[70px] w-[70px]'>
                                    <img src={ele.thumbnail} alt="cart Image" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (<h1 className='font-bold text-xl flex justify-center mt-10'>No Items are selected</h1>)}
        </div>
    )
}

export default Cart
