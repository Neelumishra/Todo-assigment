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
  
   <button className={props.value.status?"buttonunmarkedstyling fa fa-minus":"buttoncompletestyling fa fa-check"} onClick={props.complete}></button>
   <button className="buttondeletestyling fa fa-remove" onClick={props.delete}></button>
  
</div>
)
}


