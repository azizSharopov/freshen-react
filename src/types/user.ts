import { MeFollowed, Review } from "./follow";
import { MeLiked } from "./product";

export interface Shop {
  _id: string;
  mb_nick: string;
  mb_phone: string;
  mb_password: string;
  mb_type: string;
  mb_status: string;
  mb_address?: string;
  mb_description?: string;
  mb_image: string;
  mb_point: number;
  mb_top: string;
  mb_views: number;
  mb_likes: number;
  mb_follow_cnt: number;
  mb_subscriber_cnt?: number;
  mb_facebook_url?: string;
  mb_twitter_url?: string;
  mb_instagram_url?: string;
  mb_telegram_url?: string;
  createdAt?: Date;
  me_liked: MeLiked[];
  reviews?: Review[];
}

export interface Member {
  _id: string;
  mb_nick: string;
  mb_phone: string;
  mb_email?: string;
  mb_password: string;
  mb_type: string;
  mb_status: string;
  mb_address?: string;
  mb_description?: string;
  mb_image?: string;
  mb_point?: number;
  mb_top?: string;
  mb_views: number;
  mb_likes: number;
  mb_follow_cnt: number;
  mb_subscriber_cnt: number;
  createdAt: Date;
  me_liked: MeLiked[];
  me_followed: MeFollowed[];
}

export interface MemberUpdateData {
  mb_nick?: string | null;
  mb_phone?: string | null;
  mb_address?: string | null;
  mb_description?: string | null;
  mb_image?: string | null;
  mb_email?: string | null;
  mb_password?: string;
}
