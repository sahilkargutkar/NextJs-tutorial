import React, { useRef, useState } from "react";

interface Props {
  name: string;
}
interface WhyThis {
  text: string;
}

export const Hooks: React.FC<Props> = () => {
  const [count, setCount] = useState(5); //we tell ts to be number by writing a number
  //or we can tell it by using angular brackets and writing its types
  const [num, setNum] = useState<number | null>();
  //we can also pass interface to a use state
  const [back, setBack] = useState<WhyThis>(null);
  setNum(null);
  //you can pass any input value to ref like this :-
  const inputRef = useRef<HTMLInputElement>(null);
  //typescripty suggests you what you need to pass you can just copy that and put there

  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
};
