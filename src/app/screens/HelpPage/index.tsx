import { Container, Stack, Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "../../../css/info.css";

export function HelpPage() {
  /** INITIALIZATIONS **/
  const [value, setValue] = React.useState("1");
  const faq = [
    {
      question: "How long will the orders arrive?",
      answer:
        "Orders may be delivered at different times depending on what you purchase!",
    },
    {
      question: "Is there a guarantee of data security if I use the site?",
      answer: "Of course our developers guarantee the safety of your data",
    },
    {
      question: "Who do I contact if there is a problem on the site?",
      answer: "Dear customer, please use the mail section to admin",
    },
    {
      question: "Do I need to leave a review after completing the order?",
      answer:
        "Dear customer, we do not force you to leave an opinion, but your opinion is very valuable to us!",
    },
    {
      question: "I want to contribute to the development of the site",
      answer:
        "Of course, if you leave a letter to the admin or contact the given phone numbers, more detailed information will be provided!",
    },
  ];
  const rules = [
    `The site is full-fledged, i.e. making orders, live
     register to use communications
     you must pass.`,
    `After you pay for your orders
     There is no possibility of cancellation, so the payments
     check before doing.`,
    `Using profanity during live communication is absolutely fine
      is prohibited.`,
    `Writing personal ads without admin permission and
     cannot be distributed.`,
    `Your articles must not go beyond the scope of decency.`,
    `All your actions are under the control of our admins
     please respect our requests.`,
  ];

  /** HANDLERS **/
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="blogPage">
        <div>
          <img src="/homepage/image 28.png" alt="" />
        </div>
        <Container>
          <Box
            sx={{
              width: "135px",
              height: "91px",
              position: "absolute",
              marginTop: "62px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box className="blog_page">Info</Box>
            <Box className="blog_page1">
              <Box>
                Home / <span style={{ fontWeight: "600" }}>Info</span>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
      <div className={"help_page"}>
        <Container sx={{ mt: "50px", mb: "50px" }}>
          <TabContext value={value}>
            <Box className={"help_menu"}>
              <Box sx={{ borderBottom: 1 }}>
                <TabList
                  value={value}
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {" "}
                  <Tab
                    sx={{
                      "&.Mui-selected": {
                        color: "#86bc42;",
                        fontWeight: "600",
                      },
                      textTransform: "none",
                    }}
                    label="Rules"
                    value={"1"}
                  />
                  <Tab
                    sx={{
                      "&.Mui-selected": {
                        color: "#86bc42;",
                        fontWeight: "600",
                      },
                      textTransform: "none",
                    }}
                    label="FAQ"
                    value={"2"}
                  />
                </TabList>
              </Box>
            </Box>
            <Stack>
              <Stack className={"help_main_content"}>
                <TabPanel value={"1"}>
                  <Stack className={"theRules_box"}>
                    <Box className={"theRulesFrame"}>
                      {rules.map((ele, number) => {
                        return <p>{ele}</p>;
                      })}
                    </Box>
                  </Stack>
                </TabPanel>
                <TabPanel value={"2"}>
                  <Stack className={"accordian_menu"}>
                    {faq.map((ele, number) => {
                      return (
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography>{ele.question}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>{ele.answer}</Typography>
                          </AccordionDetails>
                        </Accordion>
                      );
                    })}
                  </Stack>
                </TabPanel>
              </Stack>
            </Stack>
          </TabContext>
        </Container>
      </div>
    </div>
  );
}
