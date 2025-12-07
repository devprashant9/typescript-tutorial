import { useEffect, useState, type JSX } from 'react'

type Meta = {
    createdAt: Date,
    updatedAt: Date,
    barcode: string,
    qrCode: string,
}

type Dimension = {
    width: number,
    height: number,
    depth: number,
}

interface Reviews {
    rating: number,
    comment: string,
    date: Date,
    reviewerName: string,
    reviewerEmail: string,

}

interface Product {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand: string,
    sku: string,
    weight: number,
    dimensions: Dimension,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: Reviews[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: Meta,
    images: string[],
    thumbnail: string,
}

interface JSONResponse {
    products: Product[],
    total: number,
    skip: number,
    limit: number,
}

function ApiCall(): JSX.Element {
    const [products, setProducts] = useState<null | JSONResponse>(null);

    async function fetchProducts() {
        try {
            const res = await fetch("https://dummyjson.com/products");
            const resData: JSONResponse = await res.json();
            setProducts(resData);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

  
    return (
        <div>
            {
               products?.products.map((item, index) => {
                   return <p key={index} style={{
                       border: "2px solid white"
                   }}>{item.description}</p>
               })
            }
        </div>
    )
}

export default ApiCall;