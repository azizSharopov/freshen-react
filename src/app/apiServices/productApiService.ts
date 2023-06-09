import axios from "axios";
import assert from "assert";
import { serverApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import { ProductSearchObj, SearchReviewsObj } from "../../types/others";
import { Product } from "../../types/product";
import { Review } from "../../types/follow";

class ProductApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  async getProductsMemberLiked(product_id: string) {
    try {
      const url = `/member-liken/${product_id}`,
        result = await axios.get(this.path + url, {
          withCredentials: true,
        });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "failed", result?.data?.message);
      console.log("state:", result.data.state);
      const reviews: Product[] = result.data.data;
      return reviews;
    } catch (err: any) {
      console.log(`ERROR ::: getReviewsChosenItem ${err.message}`);
      throw err;
    }
  }

  async getTargetProducts(data: ProductSearchObj): Promise<Product[]> {
    try {
      const url = "/products",
        result = await axios.post(this.path + url, data, {
          withCredentials: true,
        });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:", result.data.state);
      const products: Product[] = result.data.data;
      return products;
    } catch (err: any) {
      console.log(`ERROR ::: getTargetProducts ${err.message}`);
      throw err;
    }
  }

  async getTargetProductsBySearch(searchText: string): Promise<Product[]> {
    try {
      console.log("path::::", this.path);

      const url = `/search?q=${searchText}`;
      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);

      console.log("getTargetProductsBySearch:::", result.data.state);
      const products: Product[] = result.data.data;
      return products;
    } catch (err: any) {
      console.log(`ERROR::: getTargetProducts ${err.message}`);
      throw err;
    }
  }

  async getChosenProduct(product_id: string): Promise<Product> {
    try {
      const url = `/products/${product_id}`,
        result = await axios.get(this.path + url, {
          withCredentials: true,
        });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:", result.data.state);
      const product: Product = result.data.data;
      return product;
    } catch (err: any) {
      console.log(`ERROR ::: getChosenProduct ${err.message}`);
      throw err;
    }
  }

  public async createReview(data: any) {
    try {
      const result = await axios.post(this.path + "/create-reviews", data, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:", result.data.state);

      const comment: Review = result.data.data;
      return comment;
    } catch (err: any) {
      console.log(`ERROR::: getChosenComment ,${err.message}`);
      throw err;
    }
  }

  async getReviewsChosenItem(data: SearchReviewsObj) {
    try {
      const url = `/reviews?limit=${data.limit}&rating_ref_id=${data.rating_ref_id}&order=${data.order}&page=${data.page}`,
        result = await axios.get(this.path + url, {
          withCredentials: true,
        });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);
      console.log("state:", result.data.state);
      const reviews: Review[] = result.data.data;
      return reviews;
    } catch (err: any) {
      console.log(`ERROR ::: getReviewsChosenItem ${err.message}`);
      throw err;
    }
  }
}

export default ProductApiService;
