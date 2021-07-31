import React from "react";

interface Props {
  text: string;
  ok?: boolean; // ? means its optional
  someValue?: number; // float int bigInt etc
  fn?: (bob: string) => void; //if you dont wanna return anything
  obj?: {
    f1: string;
  };
}

const TextField: React.FC<Props> = () => {
  return (
    <div>
      <input />
    </div>
  );
};

export default TextField;
