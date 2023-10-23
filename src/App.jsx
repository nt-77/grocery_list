import { useState } from "react";
import Form from "./Form";
import { ToastContainer } from "react-toastify";
import {nanoid} from 'nanoid';
import Items from './Items';


const setLocalStorage=(listItem)=>{                         //mathod to store the list items in the local storage
  localStorage.setItem('list',JSON.stringify(listItem));
};
const defaultList = JSON.parse(localStorage.getItem('list') || '[]');         //a simplar way to do all the work done on the getLocalStorage method
const getLocalStorage=()=>{                               //to display the items from the local storage
  let list=localStorage.getItem('list');
  if (list) {
    list=JSON.parse(localStorage.getItem('list'));        //parsing the string values bake in the object
  } else{
    list=[];
  }
  return list;

}
const App = () => {

  const [items,setItems]=useState(getLocalStorage());

  const add =(item)=>{      //method to add the item in 
    const itemObject={
      name:item,
      property:false,
      id:nanoid(),
  };
  const final=[...items,itemObject]
  setItems(final);      //adding  the new item with the rest of the items
  setLocalStorage(final);
  
};
const removeItem =(itemId)=>{
  const newItems=items.filter((item)=>
    item.id !==itemId);
    setLocalStorage(newItems);
    setItems(newItems);
};

  console.log({items});
  return (
  <section  className='section-center'>
  <Form add={add}/>
  <Items items={items} removeItem={removeItem}/>
  <ToastContainer position="top-center"/>
  </section>
  )
};

export default App;
