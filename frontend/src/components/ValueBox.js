import React from "react";
import CardBox from "./CardBox";


function ValueBox() {
    return (
      <div className="flex justify-between mx-20">
        <CardBox
          title="Corporate"
          description="For those that want to grow steadily and buy pizza and burgers."
          price="$35"
          buttonText="Purchase"
          buttonLink="#"
        />
        <CardBox
          title="Corporate"
          description="For those that want to grow steadily and buy pizza and burgers."
          price="$35"
          buttonText="Purchase"
          buttonLink="#"
        />
        <CardBox
          title="Corporate"
          description="For those that want to grow steadily and buy pizza and burgers."
          price="$35"
          buttonText="Purchase"
          buttonLink="#"
        />
        

       
      </div>
    );
  }

  export default ValueBox;
