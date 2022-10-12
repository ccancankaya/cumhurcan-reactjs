import ProductModel from "./product.type";

export default interface ProductArrayModel{
    all_products:ProductModel[],
    single_product:ProductModel,
    productsByCategory:ProductModel[],
    favouriteProducts:ProductModel[]
}