import React from 'react'
import { Box, styled } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import NewContextVar from "./Context/NewContextVar.js"; //must import to consume context api data
//note we have imported the NewContextVar not StoreState


//styling
const Container = styled(Box)`
  height: 41vh;
`;

const Result = () => {
  const [src, setSrc] = useState("");
  //usin destructuring concept
    const {
      htmlCodeValue,
      cssCodeValue,
      jsCodeValue
    } = useContext(NewContextVar); //must import to consume context api data
	//note we have imported the NewContextVar not StoreState


  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 250);

    return () => clearTimeout(timeout);
  }, [htmlCodeValue, cssCodeValue, jsCodeValue]);

  const srcCode = `
  <html>
  <body>
    ${htmlCodeValue}
    </body>
    <style>
    ${cssCodeValue}
    </style>
    <script>
    ${jsCodeValue}
    </script>
  </html>
  
  `;
  return (
    <Container style={htmlCodeValue || cssCodeValue || jsCodeValue ? null : { background: "#444857" }}>
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Container>
  );
}

export default Result