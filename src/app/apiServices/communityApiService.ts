import { serverApi } from "../../lib/config";
import axios from "axios";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import {
  BoArticle,
  BoArticleInput,
  SearchArticlesObj,
  SearchMemberArticlesObj,
} from "../../types/boArticle";

class CommunityApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getTargetArticles(data: SearchArticlesObj) {
    try {
      const url =
        `/community/target?bo_id=${data.bo_id}&page=${data.page}&limit=${data.limit}` +
        (data.order ? `&order=${data.order}` : "");
      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });

      assert.ok(result.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);

      const articles: BoArticle[] = result.data.data;
      return articles;
    } catch (err: any) {
      console.log(`ERROR::: getTargetArticles, ${err.message}`);
      throw err;
    }
  }

  public async getMemberCommunityArticles(data: SearchMemberArticlesObj) {
    try {
      const url = `/community/articles?mb_id=${data.mb_id}&page=${data.page}&limit=${data.limit}`;
      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });

      assert.ok(result.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);

      const articles: BoArticle[] = result.data.data;
      return articles;
    } catch (err: any) {
      console.log(`ERROR::: getMemberCommunityArticles, ${err.message}`);
      throw err;
    }
  }
  public async getChosenArticle(art_id: string) {
    try {
      const url = `/community/single-article/${art_id}`;
      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });

      assert.ok(result.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);

      const article: BoArticle = result.data.data;
      return article;
    } catch (err: any) {
      console.log(`ERROR::: getChosenArticle, ${err.message}`);
      throw err;
    }
  }

  public async uploadImageToServer(image: any) {
    try {
      const formData = new FormData();
      formData.append("community_image", image);

      const result = await axios(`${this.path}/community/image`, {
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);

      const image_name: string = result.data.data;
      return image_name;
    } catch (err: any) {
      console.log(`ERROR::: uploadImageToServer ,${err.message}`);
      throw err;
    }
  }
  public async createArticle(data: BoArticleInput) {
    try {
      const result = await axios.post(this.path + "/community/create", data, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:", result.data.state);

      const article: BoArticle = result.data.data;
      return article;
    } catch (err: any) {
      console.log(`ERROR::: createArticle ,${err.message}`);
      throw err;
    }
  }
}

export default CommunityApiService;
