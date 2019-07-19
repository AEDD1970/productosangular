export interface Product {
    id: number | string;
    producname: string;
    price: number | string;
    description: string;
}


export type ProductService = {
    data: Required<Product>[]
}[]