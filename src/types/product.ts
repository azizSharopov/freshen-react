import { Review } from "./follow";
import { Member, Shop } from "./user";
export interface MeLiked {
  mb_id: string;
  like_ref_id: string;
  my_favorite: boolean;
}

export interface Product {
  _id: string;
  product_name: string;
  product_collection: string;
  product_status: string;
  product_price: number;
  discounted_price: number;
  product_discount?: {
    isValid: boolean;
    type: string;
    value: number;
    startDate: Date;
    endDate: Date;
  };
  product_left_cnt: number;
  product_sold_cnt: number;
  product_size: string;
  product_sku: string;
  product_volume: number;
  product_description: string;
  product_images: string[];
  product_likes: number;
  product_views: number;
  shop_mb_id: string;
  createdAt: Date;
  updatedAt: Date;
  me_liked: MeLiked[];
  reviews?: Review[];
  member_data: Shop[];
  discounted_result: number;
}
