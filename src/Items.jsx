import SingleItem from './SingleItem';
const Items =({items, removeItem})=>{
return(
    <div className='items'>
        <h2>Single items</h2>
{items.map((item)=>{
    return(
        <SingleItem key={item.id} item={item} removeItem={removeItem}/>
    );
})}
</div>
);
}
export default Items;