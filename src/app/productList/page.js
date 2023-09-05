"use client"
import { useEffect, useState } from "react"


export default function page() {
    const [product, setProduct] = useState([])

    useEffect(async () => {
        let data = await fetch("https://dummyjson.com/products")
        data = await data.json()
        setProduct(data.products)
     
    }, [])
       console.log(product);
    return (
        <div>
            <h1>product list</h1>
            {
                product.map((item) => (
                    <h2>product name : {item.title}</h2>
                ))
            }
        </div>
    )
}
