import { useState } from "react";
import {toast} from 'react-toastify'
import {nanoid} from 'nanoid';
const Form =({add})=>{
    const [item,setItem]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        addItems();
    }
    const addItems=()=>{                        //method to add item if value is provided
        if (!item){
            toast.error('item could not be added ');
            return;
        }
        toast.success('item added successfully');
        add(item);

    };

    return(

            <form onSubmit={handleSubmit}>
                <h4>Grocery Bud</h4>
            <div className='form-control' >
                <input className='form-input' type='text' value={item} onChange={(e)=>setItem(e.target.value)}>
                </input>
                <button className='btn' type='submit'>
                    submit
                </button>
                </div >
            </form>
    )
};
export default Form;