import React, { useState } from "react";
import { Box, Button, Container } from "@mui/material";
import { verifiedMemberData } from "../../apiServices/verify";
import { MemberUpdateData } from "../../../types/user";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import MemberApiService from "../../apiServices/memberApiService";
import { Definer } from "../../../lib/Definer";
import assert from "assert";

export default function AccauntAddress() {
  const [isEditing, setIsEditing] = useState(false);

  // const [memberUpdate, setMemberUpdate] = useState<MemberUpdateData>({
  //   mb_address: "",
  // });

  //   const [addressValue, setAddressValue] = useState(`Ayden
  // Seoul. Daegu South Korea

  // sharopovaziz23@gmail.com
  // 010 8257 8505`);

  // const changeMemberAddressHandler = (e: any) => {
  //   memberUpdate.mb_address = e.target.value;
  //   setMemberUpdate({ ...memberUpdate });
  // };
  // const handleSubmitButton = async () => {
  //   try {
  //     const memberService = new MemberApiService();
  //     const result = await memberService.updateMemberData(memberUpdate);

  //     assert.ok(result, Definer.general_err1);
  //     await sweetTopSmallSuccessAlert(
  //       "Information modified successfully!",
  //       700,
  //       false
  //     );
  //     window.location.reload();
  //   } catch (err) {
  //     console.log(`ERROR::: handleSubmitButton ${err}`);
  //     sweetErrorHandling(err).then();
  //   }
  // };

  return (
    <Box>
      <Box className="dash_head_text" sx={{ marginBottom: "30px" }}>
        <span>Address</span>
      </Box>
      <div
        className={"admin_input_box"}
        style={{ display: "flex", flexDirection: "column", marginLeft: "40px" }}
      >
        <label>User Address</label>
        {/* <textarea
          style={{
            width: "400px",
            height: "150px",
            marginTop: "10px",
            marginLeft: "20px",
          }}
          placeholder={verifiedMemberData?.mb_address ?? "manzil kitirilmagan"}
          name="mb_address"
          onChange={changeMemberAddressHandler}
        ></textarea> */}
      </div>
      {/* <Button
        onClick={handleSubmitButton}
        className="dash_search_btn"
        sx={{
          background: "#86BC42",
          borderRadius: "4px",
          fontFamily: "Lato",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "13px",
          lineHeight: "16px",
          color: "#FFFFFF",

          width: "160px",
          height: "50px",

          textTransform: "none",
          "&:hover": {
            color: "#121212",
            border: "1px solid #eaeaea",
          },
        }}
      >
        UPDATE
      </Button> */}
    </Box>
  );
}
