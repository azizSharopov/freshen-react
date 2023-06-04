import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/react-editor";
import { Box, Stack } from "@mui/material";

const TViewer = (props: any) => {
  const editorRef = useRef();
  console.log("chosenSingleBoArticle::::::::::::", props.chosenSingleBoArticle);

  if (!props.chosenSingleBoArticle) {
    // Handle the case when chosenSingleBoArticle is not available
    return null; // or return a loading spinner or placeholder content
  }

  return (
    <Stack sx={{ background: "white", mt: "30px", borderRadius: "10px" }}>
      <Box sx={{ m: "40px" }}>
        <Viewer
          // @ts-ignore
          ref={editorRef}
          initialValue={props.chosenSingleBoArticle.art_content}
          height={"600px"}
        />
      </Box>
    </Stack>
  );
};

export default TViewer;
