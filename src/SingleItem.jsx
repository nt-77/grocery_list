import{useState} from 'react';


const SingleItem =({item,removeItem})=>{

const [isChecked,setIsChecked]=useState(item.property);
console.log(isChecked);

const handleClick =(e)=>{
    setIsChecked(!isChecked);
console.log(isChecked);

}
return (
    <div className='single-item'>
<input type='checkbox' checked={isChecked} onChange={handleClick}></input>
<p style={{textTransform:'capitalize', textDecoration :isChecked && 'line-through'}} >{item.name}</p>
<button className='btn remove-btn' type='button' onClick={()=>removeItem(item.id)}>delete</button>
</div>
)
}
export default SingleItem;