import { useEffect, useRef, useState } from "react"
import ReferenceElements from "./components/ReferenceElements";
import PreviousStateValue from "./components/PreviousStateValue";

const App = () => {
  const [name, setName] = useState<string>('');
  const renderCount = useRef<number>(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  console.log('renderCount', renderCount);
  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)}/>
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
      <ReferenceElements />
      <PreviousStateValue />
    </>
  )
}

export default App