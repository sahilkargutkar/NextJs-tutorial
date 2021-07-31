import React from "react";

interface Person {
  name: string;
  surname: string;
}

interface Props {
  text?: string;
  ok?: boolean;
  someValue?: number; // float int bigInt etc
  fn?: (bob: string) => void; //if you dont wanna return anything
  person: Person; //created another interface for passing here
}

const ObjComp: React.FC<Props> = () => {
  return (
    <div>
      <input />
    </div>
  );
};

export default ObjComp;
