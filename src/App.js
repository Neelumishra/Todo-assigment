import React from 'react';
import './style.css';
import List from './List.jsx';

export default function App() {
  const [value, setvalue] = React.useState();
  const [list, setlist] = React.useState([]);
  const [count, setcount] = React.useState(0);

  let reference =React.useRef("")
  

  function handlechange(e) {
    let o={
      message:e.target.value,
      status:false,
      
    }
    console.log(o)
    setvalue(o);
  }
  function handleclick() {
    setlist([...list, value]);
    reference.current.value = '';
    setcount(count+1)
    
  }

function handlecomplete(index) {
  setlist(list.map((element)=>(element.status)?setcount(count+1):setcount(count-1)))
  setlist( list.map((element,i)=>{
    if(i!=index){
      return element
    }else{
      return {
        message:element.message,
        status:!element.status
        
}
    }
    })) 
  }

  function handleDelete(index){
    setcount(count-1)
    console.log("hello")
   setlist(list.filter((_,i)=>(index!==i)))}

  return (
    <>
      <div className="parentDiv" >
        <h1 className="parentHeading">Pending Task ({count})</h1>
        {list.map((element,index) => (
          <List key={index} value={element} complete={()=>handlecomplete(index)}  delete={()=>handleDelete(index)} />
        ))}
        <div className="parentinputbtnbind">
         <input className="parentInput"
          ref={reference}
          onChange={handlechange}
          placeholder="Add a new task"
        /><button className="parentbutton"  onClick={handleclick}>Add</button></div>
      </div>
    </>
  );
}
