export interface TypeProduct{
    nametype: | string;
}

export type TypeProductService = {
    type: Required<TypeProduct>[]
}[]