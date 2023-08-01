

import { Box } from "@mui/material";
import React, { useState, useCallback } from "react";
import "../App.css";

// use yarn add @uiw/react-codemirror , or will get error
import CodeMirror from "@uiw/react-codemirror"; //we used @uiw/react-codemirror package to make the code editor in our webiste

// use yarn add @uiw/codemirror-theme-tokyo-night , or will get error
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";

import styled from "@emotion/styled";

//the variable below should start with capital or will show error
const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;

  flex-direction: column;
  border-radius: 3px;
  background: #060606;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #060606;
  color: #aaaebc;
  font-weight: 700;
`;
const Heading = styled(Box)`
  background: #1a1b26;
  padding: 9px 12px;
  display: flex;
  border-radius: 7px;
`;

const Editor = ({ heading, icon, language, codeValue, changingValue }) => {
  // const [editorValue, setEditorValue] = useState(codeValue);
  const onChange = useCallback((value, viewUpdate) => {
    //console.log("value:", value);
    changingValue(value)
    // console.log(viewUpdate)
    // setEditorValue(value);
  }, []);
  return (
    <Container>
      {/*Box is like a div in MUI*/}
      <Header>
        <Heading>
          <img src={icon} alt="html_icon" className="langIcon"></img>
          {heading}
        </Heading>
      </Header>

      <CodeMirror
        value={codeValue}
        height="300px"
        width="420.458px"
        theme={tokyoNight}
        onChange={onChange}
        extensions={language}
      />
    </Container>
  );
};

export default Editor;
