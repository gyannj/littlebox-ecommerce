export interface inventory {
    gs1sk : string
    gs1pk : string
    stock : number
    vendor : string
    name : string
    sellingPrice : number
    categoryId : string
    category : string
    sk : string
    image_url : string
    price : number
    pk : string
    productId : string
}

export interface cart_item {
    "productId" : string
    categoryId : string
    quantity : number
    price: number
}
export interface cart_product {
    gs1sk : string
    gs1pk : string
    stock : number
    vendor : string
    name : string
    sellingPrice : number
    categoryId : string
    category : string
    sk : string
    image_url : string
    price : number
    pk : string
    productId : string
    quantity: number
}