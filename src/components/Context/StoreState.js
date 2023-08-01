import NewContextVar from "./NewContextVar";
import { useState } from "react";


const StoreState = (props) => {
  const [htmlCodeValue, setHtmlCodeValue] = useState(`<h1>
	<span>w</span>
	<span>e</span>
	<span>l</span>
	<span>c</span>
	<span>o</span>
	<span>m</span>
	<span>e</span>
</h1>`);
  const [cssCodeValue, setCssCodeValue] = useState(`@import url(\`https://fonts.googleapis.com/cs
s2?family=Lato:ital,wght@0,300;0,400;0,700;0,90
0;1,300;1,400;1,700;1,900&family=Open+Sans:w
ght@400;500;600;700&family=Outfit:wght@300;
400;500;600;700;800;900&family=Poppins:ital,w
ght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;
1,100;1,200&family=Roboto&family=Roboto+Mo
no:wght@300;400;500;600;700&display=swap\`);
h1{
  color:red;
  font-family: 'Roboto Mono', monospace;
}`);
  const [jsCodeValue, setJsCodeValue] = useState(`console.log('Hello');`);

  return (
    <NewContextVar.Provider value={{ // Provider 1st letter should be capital
      htmlCodeValue,
      setHtmlCodeValue,
      cssCodeValue,
      setCssCodeValue,
      jsCodeValue,
      setJsCodeValue
    }}>
        {props.children}
    </NewContextVar.Provider>
  );
};
export default StoreState;
