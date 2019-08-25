export interface Product {
    id?: number | string;
    producname: string;
    type_product_id: number | string;
    price: number | string;
    description: string;
    quantiyy: number | string;
}

export interface ListProduct{
    name: string;
    url: string;
    image: string;
}

export type ProductService = {
    data: Required<Product>[]
}