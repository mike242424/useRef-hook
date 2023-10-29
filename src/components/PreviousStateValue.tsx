import { useEffect, useRef, useState } from "react";

const PreviousStateValue = () => {
  const [name, setName] = useState<string>("");
  const previousName = useRef<string>("");

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  return (
    <>
      <hr />
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {previousName.current}
      </div>
    </>
  );
};

export default PreviousStateValue;
