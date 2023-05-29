import { BoArticle } from "./boArticle";
import { Follower, Following, Review } from "./follow";
import { Order } from "./order";
import { Product } from "./product";
import { Member, Shop } from "./user";

/** REACT APP STATE */
export interface AppRootState {
  homePage: HomePageState;
  shopPage: ShopPageState;
  ordersPage: OrdersPageState;
  communityPage: CommunityPageState;
  memberPage: MemberPageState;
  aboutPage: AboutPageState;
}

/** HOMEPAGE */
export interface HomePageState {
  topShops: Shop[];
  bestProducts: Product[];
  newProducts: Product[];
  saleProducts: Product[];
  bestBoArticles: BoArticle[];
}

/** ABOUT PAGE */
export interface AboutPageState {
  freshenBoArticles: BoArticle[];
}
/** SHOP PAGE */
export interface ShopPageState {
  chosenShop: Shop | null;
  targetProducts: Product[];
  chosenProduct: Product | null;
  targetShops: Shop[];
  memberReviews: Review | null;
}

/** ORDERS PAGE */
export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}

/** COMMUNITY PAGE */
export interface CommunityPageState {
  targetBoArticles: BoArticle[];
}

/** MEMBER PAGE */
export interface MemberPageState {
  chosenMember: Member | null;
  chosenMemberBoArticles: BoArticle[];
  chosenSingleBoArticle: BoArticle | null;
  memberFollowers: Follower[];
  memberFollowings: Following[];
}
