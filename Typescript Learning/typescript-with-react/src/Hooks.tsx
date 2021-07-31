import React, { useState } from "react";

interface Props {
  name: string;
}

export const Hooks: React.FC<Props> = () => {
  const [count, setCount] = useState(5); //we tell ts to be number by writing a number
  //or we can tell it by using angular brackets and writing its types
  const [num, setNum] = useState<number | null>();
  setNum(null);

  return <div></div>;
};
