import httpService from "./http-service";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    async getAll() {
        var response = await httpService.get("/categories");
        return response.data.categories;
    },
    async getById(category_id:number){
        var response = await httpService.get(`/categories/${category_id}`);
        return response.data.category;
    }
}
