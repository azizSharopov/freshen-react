import axios from "axios";
import assert from "assert";
import { serverApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import { Shop } from "../../types/user";
import { SearchObj } from "../../types/others";

class ShopApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  async getTopShops(): Promise<Shop[]> {
    try {
      const url = "/shops?order=top&page=1&limit=20",
        result = await axios.get(this.path + url, { withCredentials: true });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:", result.data.state);
      const top_shops: Shop[] = result.data.data;
      return top_shops;
    } catch (err: any) {
      console.log(`ERROR ::: getTopShops ${err.message}`);
      throw err;
    }
  }

  async getShops(data: SearchObj): Promise<Shop[]> {
    try {
      const url = `/shop?order=${data.order}&page=${data.page}&limit=${data.limit}`,
        result = await axios.get(this.path + url, { withCredentials: true });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:", result.data.state);
      const shops: Shop[] = result.data.data;
      return shops;
    } catch (err: any) {
      console.log(`ERROR ::: getShops ${err.message}`);
      throw err;
    }
  }

  async getChosenShop(id: string): Promise<Shop> {
    try {
      const url = `/shops/${id}`,
        result = await axios.get(this.path + url, { withCredentials: true });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:", result.data.state);
      const shop: Shop = result.data.data;
      return shop;
    } catch (err: any) {
      console.log(`ERROR ::: getChosenShop ${err.message}`);
      throw err;
    }
  }
}

export default ShopApiService;
