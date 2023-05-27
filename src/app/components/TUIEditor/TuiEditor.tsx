import { useCallback, useRef, useState } from "react";
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
import { BoArticleInput } from "../../../types/boArticle";
import CommunityApiService from "../../apiServices/communityApiService";
import { serverApi } from "../../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";

export const TuiEditor = (props: any) => {
  /* INITIALIZATIONS */
  const editorRef = useRef();

  const [communityArticleData, setCommunityArticleData] =
    useState<BoArticleInput>({
      art_subject: "",
      bo_id: "",
      art_content: "",
      art_image: "",
    });

  /*HANDLERS*/
  const uploadImage = async (image: any) => {
    try {
      const communityService = new CommunityApiService();
      const image_name = await communityService.uploadImageToServer(image);

      communityArticleData.art_image = image_name;
      setCommunityArticleData({ ...communityArticleData });

      const source = `${serverApi}/${image_name}`;
      return source;
    } catch (err) {
      console.log(`ERROR ::: uploadImage ${err}`);
    }
  };

  const changeCategoryHandler = (e: any) => {
    communityArticleData.bo_id = e.target.value;
    setCommunityArticleData({ ...communityArticleData });
  };

  const changeTitleHandler = useCallback(
    (e: any) => {
      communityArticleData.art_subject = e.target.value;
      setCommunityArticleData({ ...communityArticleData });
    },
    [communityArticleData.art_subject]
  );

  const handleRegisterButton = async () => {
    try {
      const editor: any = editorRef.current;
      const art_content = editor?.getInstance().getHTML();

      communityArticleData.art_content = art_content;

      assert.ok(
        communityArticleData.art_content !== "" &&
          communityArticleData.bo_id !== "" &&
          communityArticleData.art_subject !== "",
        Definer.input_err1
      );

      const communityService = new CommunityApiService();
      await communityService.createArticle(communityArticleData);
      await sweetTopSmallSuccessAlert("Article is created successfully!");

      props.setArticlesRebuild(new Date());
      props.setValue("6");
    } catch (err) {
      console.log(`ERROR ::: handleRegisterButton ${err}`);
      sweetErrorHandling(err).then();
    }
  };

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
              value={communityArticleData.bo_id}
              onChange={changeCategoryHandler}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              style={{ fontWeight: "600", fontSize: "14px", color: "#86bc42" }}
            >
              <MenuItem value="">
                <span>choose category</span>
              </MenuItem>
              <MenuItem
                value={"FRESHEN"}
                style={{ fontWeight: "600", fontSize: "14px" }}
              >
                FRESHEN
              </MenuItem>

              <MenuItem
                value={"FRUITS"}
                style={{ fontWeight: "600", fontSize: "14px" }}
              >
                FRUITS
              </MenuItem>
              <MenuItem
                value={"MEATS"}
                style={{ fontWeight: "600", fontSize: "14px" }}
              >
                MEATS
              </MenuItem>
              <MenuItem
                value={"VEGETABLES"}
                style={{ fontWeight: "600", fontSize: "14px" }}
              >
                VEGETABLES
              </MenuItem>

              <MenuItem
                value={"OTHERS"}
                style={{ fontWeight: "600", fontSize: "14px" }}
              >
                OTHERS
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className={"form_row"} style={{ width: "450px" }}>
          <Box>Subject</Box>
          <TextField
            onChange={changeTitleHandler}
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
        initialValue="Type here"
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
            const uploadImageURL = await uploadImage(image);

            console.log("uploadImageURL", uploadImageURL);
            callback(uploadImageURL);
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
          onClick={handleRegisterButton}
        >
          Register
        </Button>
      </Stack>
    </Stack>
  );
};
