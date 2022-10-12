import httpService from "./http-service";
import ProductModel from "../models/product.type";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async getAll() {
        var response = await httpService.get("/products");
        return response.data.products;
    },
    async getById(product_id: number) {
        var response = await httpService.get(`/products/${product_id}`);
        return response.data.product;
    },
    async addProduct(data:any) {
        var response=await httpService.post("/products",data);
        console.log(response)
        return {"status":response.data.message,"data": response.data.product}
    }
}
