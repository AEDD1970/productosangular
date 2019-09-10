export interface TypeProduct{
    id: number | string;
    name: number | string;
}

export type TypeProductService = {
    types: Required<TypeProduct>[]
}[]