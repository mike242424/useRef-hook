import { useRef, useState } from "react";

const ReferenceElements = () => {
  const [name, setName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    console.log(inputRef.current);
    inputRef.current?.focus();
  };

  return (
    <>
      <hr />
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={focusInput}>Focus</button>
    </>
  );
};

export default ReferenceElements;
