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
              <MenuItem value={"technology"}>Technology</MenuItem>
              <MenuItem value={"lifehacks"}>Life-Hacks</MenuItem>
              <MenuItem value={"story"}>story</MenuItem>
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
          color="secondary"
          style={{ margin: "30px", width: "250px", height: "65px" }}
        >
          Register
        </Button>
      </Stack>
    </Stack>
  );
};
