import React from "react";

const Reimg = (props) => {
    const img=`https://source.unsplash.com/600x400/?${props.name}`;
  return <div>
    <img src={img} alt="images"/>
  </div>;
};

export default Reimg;
