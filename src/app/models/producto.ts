export interface Product {
    id: number | string;
    producname: string;
    type_product_id: number | string;
    price: number | string;
    description: string;
    image: File | string;
    quantiyy: number | string;
}

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
export interface ProductApi extends Omit<Product, 'type_product_id'> {
   
    image: File | string;
}
export interface ListProduct {
    name: string;
    url: string;
    image: string;
}

export type ProductService = {
    data: Required<ProductApi>[]
}