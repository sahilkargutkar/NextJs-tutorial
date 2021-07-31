// How to declare a typescript component

// export const TextField: React.FC = () => {};

// This is how you declare a component with react

/*
You can also pass an object as props in the component

 export const TextField: React.FC<{text.string}> = () => {};

 You just have to add angular brackets and write props in them
 
 or you can do it by creating an interface

/////////////////////////////////////////////////////////////////

import React from "react";

interface Props{
    text:string
}

export const TextField :React.FC<{Props}> = () =>{

    *Here instead of passing an object we have passed Props interface*
}

 */
