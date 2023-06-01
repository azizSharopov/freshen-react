import React from "react";

import {
  Box,
  Button,
  Checkbox,
  Container,
  LinearProgress,
  Rating,
  Stack,
  TextField,
  linearProgressClasses,
  styled,
} from "@mui/material";
import Marginer from "../../components/marginer";
import { ProductSearchObj } from "../../../types/others";
import { Reviews } from "../../../types/follow";

//BorderLinerProgress

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#F5C34B" : "#F5C34B",
  },
}));

const reviews: Array<number> = [1, 2];

export function ReviewsComponent(props: any) {
  return (
    <Stack sx={{ width: "500px", height: "600px" }}>
      <Box className="count_of_review">Reviews</Box>
      {reviews.map((ele, index) => {
        return (
          <Box className="reviews_box" key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box className="review_account_info">
                <Box
                  className="review_account_img"
                  sx={{ backgroundColor: "#86bc42" }}
                >
                  <img src="/icons/default_user.png" alt="user_chosen" />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box className="user_of_review">Bessie Cooper</Box>
                  <Box className="date_of_review">April 6, 2021 at 3:21 AM</Box>
                </Box>
              </Box>
              <Box
                className="rating_of_review"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Rating size="small" name="read-only" value={4} readOnly />
              </Box>
            </Box>
            <Box className="date_of_review">
              Every single thing we tried with John was delicious! Found some
              awesome places we would definitely go back to on our trip. John
              was also super friendly and passionate about Beşiktaş and
              Istanbul.
            </Box>

            <Marginer
              direction="vertical"
              height="1"
              width="2"
              bg="#EAEAEA"
              opsty="1"
            />
          </Box>
        );
      })}
      <Marginer
        direction="horizontal"
        height="1"
        width="2"
        bg="#EAEAEA"
        opsty="1"
      />
    </Stack>
  );
}

export function RatingComponent(props: any) {
  let chosenPro = props.chosenProduct;

  const product_raviews = chosenPro?.reviews?.[0]?.average_rating ?? 0;
  const product_raviews_cnt = chosenPro?.reviews?.[0]?.reviews_cnt ?? 0;

  // {Array.isArray(memberReviews) &&
  //   memberReviews.map((reviews: Reviews, index: any) => {
  //     const options: Intl.DateTimeFormatOptions = {
  //       year: "numeric",
  //       month: "long",
  //       day: "numeric",
  //       hour: "numeric",
  //       minute: "numeric",
  //     };
  //     const createAt = new Date(reviews.createdAt);
  //     const formattedDate =
  //       createAt instanceof Date
  //         ? createAt.toLocaleDateString(undefined, options)
  //         : "";

  return (
    <Box className="rating_box">
      <Box className="overal_rating">
        <Box className="rating_by_num">{product_raviews}</Box>
        <Box className="rating_by_star">
          <Rating size="large" name="read-only" />
          <br /> {product_raviews_cnt} reviews
        </Box>
      </Box>
      <Box className="rating">
        <Box>5 star</Box>
        <Box className="reting_progress">
          <BorderLinearProgress
            variant="determinate"
            value={
              product_raviews_cnt
                ? ((chosenPro?.reviews?.[0]?.ratingByValue?.[5] ?? 0) * 100) /
                  product_raviews_cnt
                : 0
            }
          />
        </Box>
        <Box>
          {" "}
          {product_raviews_cnt
            ? ((chosenPro?.reviews?.[0]?.ratingByValue?.[5] ?? 0) * 100) /
              product_raviews_cnt
            : 0}
          %
        </Box>
      </Box>

      <Box className="rating">
        <Box>4 star</Box>
        <Box className="reting_progress">
          <BorderLinearProgress
            variant="determinate"
            value={
              product_raviews_cnt
                ? ((chosenPro?.reviews?.[0]?.ratingByValue?.[4] ?? 0) * 100) /
                  product_raviews_cnt
                : 0
            }
          />
        </Box>
        <Box>
          {product_raviews_cnt
            ? ((chosenPro?.reviews?.[0]?.ratingByValue?.[4] ?? 0) * 100) /
              product_raviews_cnt
            : 0}
          %
        </Box>
      </Box>

      <Box className="rating">
        <Box>3 star</Box>
        <Box className="reting_progress">
          <BorderLinearProgress
            variant="determinate"
            value={
              product_raviews_cnt
                ? ((chosenPro?.reviews?.[0]?.ratingByValue?.[3] ?? 0) * 100) /
                  product_raviews_cnt
                : 0
            }
          />
        </Box>
        <Box>
          {product_raviews_cnt
            ? ((chosenPro?.reviews?.[0]?.ratingByValue?.[3] ?? 0) * 100) /
              product_raviews_cnt
            : 0}
          %
        </Box>
      </Box>

      <Box className="rating">
        <Box>2 star</Box>
        <Box className="reting_progress">
          <BorderLinearProgress
            variant="determinate"
            value={
              product_raviews_cnt
                ? ((chosenPro?.reviews?.[0]?.ratingByValue?.[2] ?? 0) * 100) /
                  product_raviews_cnt
                : 0
            }
          />
        </Box>
        <Box>
          {product_raviews_cnt
            ? ((chosenPro?.reviews?.[0]?.ratingByValue?.[2] ?? 0) * 100) /
              product_raviews_cnt
            : 0}
          %
        </Box>
      </Box>

      <Box className="rating">
        <Box>1 star</Box>
        <Box className="reting_progress">
          <BorderLinearProgress
            variant="determinate"
            value={
              product_raviews_cnt
                ? ((chosenPro?.reviews?.[0]?.ratingByValue?.[1] ?? 0) * 100) /
                  product_raviews_cnt
                : 0
            }
          />
        </Box>
        <Box>
          {product_raviews_cnt
            ? ((chosenPro?.reviews?.[0]?.ratingByValue?.[1] ?? 0) * 100) /
              product_raviews_cnt
            : 0}
          %
        </Box>
      </Box>
      <Box className="rating_btn">Write Your Review</Box>
    </Box>
  );
}
