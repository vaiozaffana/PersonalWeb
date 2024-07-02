import React from "react";
import Image from "next/image";

export const CircularText = ({ className = "", ...rest }) => {
	return (
	<Image
	src="/CircularTextt.png"
	alt="Circular Text"
	width="500"
	height="500"
	className={`w-full h-auto ${className}`}
    {...rest}/>
	)


  

};
