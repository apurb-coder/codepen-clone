import React from "react";
import { useContext } from "react"; //must import to consume context api data
import NewContextVar from "./Context/NewContextVar.js"; //must import to consume context api data
import Editor from "./Editor";
import htmlIcon from "./Icons/htmlIcon.svg";
import cssIcon from "./Icons/cssIcon.svg";
import jsIcon from "./Icons/jsIcon.svg";
// use,  yarn add @uiw/codemirror-extensions-langs , or will get error
import { langs } from "@uiw/codemirror-extensions-langs"; //used to add language extensions

import { Box, styled } from "@mui/material";

//the variable below should start with capital or will show error
const Container = styled(Box)`
  display: flex;
`;

const Code = () => {
  //usin destructuring concept
    const {
      htmlCodeValue,
      setHtmlCodeValue,
      cssCodeValue,
      setCssCodeValue,
      jsCodeValue,
      setJsCodeValue,
    } = useContext(NewContextVar); //must import to consume context api data
	//note we have imported the NewContextVar not StoreState



  return (
    <Container>
      <Editor
        heading="HTML"
        icon={htmlIcon}
        language={[langs.html()]}
        codeValue={htmlCodeValue}
        changingValue={setHtmlCodeValue}
      />
      <Editor
        heading="CSS"
        icon={cssIcon}
        language={[langs.css()]}
        codeValue={cssCodeValue}
        changingValue={setCssCodeValue}
      />
      <Editor
        heading="JS"
        icon={jsIcon}
        language={[langs.javascript()]}
        codeValue={jsCodeValue}
        changingValue={setJsCodeValue}
      />
    </Container>
  );
};

export default Code;
