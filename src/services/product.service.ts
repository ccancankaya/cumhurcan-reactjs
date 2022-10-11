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
    async addProduct(data: ProductModel) {
        return httpService.post("/products", data)
    }
}
