export interface TypeProduct{
    nametype: number | string;
    name: number | string;
}

export type TypeProductService = {
    types: Required<TypeProduct>[]
}[]