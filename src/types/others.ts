import { Review } from "./follow";
import { Shop } from "./user";

export interface SearchObj {
  page: number;
  limit: number;
  order: string;
}

export interface ProductSearchObj {
  page: number;
  limit: number;
  order: string;
  product_price?: string;
  product_type?: string;
  shop_mb_id?: string;
  product_sold_cnt?: string;
  reviews?: Review[];
}

export interface MemberLiken {
  like_group: string;
  like_status: number;
  like_ref_id: string;
}

export interface CartItem {
  _id: string;
  quantity: number;
  name: string;
  price: number;
  image: string;
}

export interface ChatMessage {
  msg: string;
  mb_id: string;
  mb_nick: string;
  mb_image: string;
}
export interface ChatGreetMsg {
  text: string;
}

export interface ChatInforMsg {
  total: number;
}
