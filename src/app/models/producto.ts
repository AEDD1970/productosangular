export interface Product {
    id?: number;
    producname: string;
    price: number | string;
    description: string;
}


export interface ProductService {
    data: Required<Product>[]
}