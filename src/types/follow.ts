import { Member } from "./user";

export interface MeFollowed {
  follow_id: string;
  subscriber_id: string;
  my_following: boolean;
}

export interface Review {
  reviews_cnt?: number;
  ratingByValue?: {
    1?: number;
    2?: number;
    3?: number;
    4?: number;
    5?: number;
  };
  average_rating?: number;
}

export interface Reviews {
  _id: string;
  rating_ref_id: string;
  mb_id: string;
  cmt_content: string;
  cmt_status?: string;
  rating_group?: string;
  rating_stars: number;
  cmt_likes?: number;
  cmt_images?: [];
  createdAt: Date;
  updatedAt: Date;
  follow_member_data: Member;
  member_data: Member[];
}

export interface Follower {
  _id: string;
  follow_id: string;
  subscriber_id: string;
  createdAt: Date;
  updatedAt: Date;
  subscriber_member_data: Member;
  me_followed: MeFollowed[] | null;
}

export interface Following {
  _id: string;
  follow_id: string;
  subscriber_id: string;
  createdAt: Date;
  updatedAt: Date;
  follow_member_data: Member;
}

export interface FollowSearchObj {
  page: number;
  limit: number;
  mb_id: string;
}
