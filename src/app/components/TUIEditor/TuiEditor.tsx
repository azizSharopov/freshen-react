import { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Stack,
  Typography,
  Select,
  TextField,
} from "@mui/material";

export const TuiEditor = (props: any) => {
  const editorRef = useRef();

  return (
    <Stack>
      <Stack
        direction="row"
        style={{ margin: "40px" }}
        justifyContent="space-evenly"
        className={"form_blog"}
      >
        <Box className={"form_row"} style={{ width: "450px" }}>
          Category
          <FormControl sx={{ width: "100%", background: "white" }}>
            <Select
              value={"technology"}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <span>choose category</span>
              </MenuItem>
              <MenuItem value={"technology"}>Fruit</MenuItem>

              <MenuItem value={"story"}>Meats</MenuItem>
              <MenuItem value={"story"}>Fishs</MenuItem>
              <MenuItem value={"lifehacks"}>Vegetables</MenuItem>
              <MenuItem value={"story"}>Drinks</MenuItem>
              <MenuItem value={"story"}>Bakery</MenuItem>
              <MenuItem value={"story"}>Butter & Egges</MenuItem>
              <MenuItem value={"story"}>Milks & Creams</MenuItem>
              <MenuItem value={"story"}>Coffee & Tea</MenuItem>
              <MenuItem value={"story"}>Cookies</MenuItem>
              <MenuItem value={"story"}>Chocolates</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className={"form_row"} style={{ width: "450px" }}>
          <Box>Subject</Box>
          <TextField
            id="filled-basic"
            label="Subject"
            variant="filled"
            style={{ width: "450px", background: "white" }}
          />
        </Box>
      </Stack>

      {/*@ts-ignore*/}
      <Editor
        ref={editorRef}
        placeholder="Type here"
        previewStyle="vertical"
        height="640px"
        initialEditType="WYSIWYG"
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["image", "table", "link"],
          ["ul", "ol", "task"],
        ]}
        hooks={{
          addImageBlobHook: async (image: any, callback: any) => {
            return false;
          },
        }}
        events={{
          load: function (param: any) {},
        }}
      />
      <Stack direction="row" justifyContent="center">
        <Button
          variant="contained"
          style={{
            width: "240px",
            height: "50px",
            marginTop: "30px",
            background: "#86BC42",
            borderRadius: "4px",
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "13px",
            lineHeight: "16px",
            color: "#FFFFFF",
            position: "relative",
          }}
          // onClick={() => setValue(!value)}
          onClick={props.handleSignUpOpen}
        >
          Register
        </Button>
      </Stack>
    </Stack>
  );
};
