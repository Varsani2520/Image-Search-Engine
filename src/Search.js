import React, { useState } from "react";

import Reimg from "./Reimg";
const Search = () => {
    const [img,setImg]=useState('')
    const events=(event)=>{
const data =event.target.value;
console.log(data);
setImg(data);
    }
  return <div>
    <input type="text" placeholder="search anything" onChange={events} value={img}/>
    {img ===""?(<>
    hello</>):<Reimg name={img}/>}

  </div>;
};

export default Search;
