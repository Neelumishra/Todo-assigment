import React from "react";


export default function List(props){
  let s={
    textDecoration:props.value.status?"line-through":"none"
  }
  // let style={
  //   backgroundColor:false?"red":"blue"
  // }
  
return(
<div className="divstyling">
  <p className="textstyling" style={s}>{props.value.message}</p>
  
   <button className="buttoncompletestyling" onClick={props.complete}>Complete</button>
   <button className="buttondeletestyling" onClick={props.delete}>Delete</button>
  
</div>
)
}


