type ProductProps ={
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const productsArray:ProductProps[] =[
    {
title:"iPhone 14 Pro",
description:"This is iPhone 14 pro",
type:" phone",
capacity:"Capacity:256 ",
price:1200,
    },
    {
        title:"iPhone 13 Pro",
        description:"This is iPhone 13 pro",
        type:" phone",
        capacity:"Capacity:128 ",
        price:900,
            },
            {
                title:"iPhone 12 Pro",
                description:"This is iPhone 12 pro",
                type:" phone",
                capacity:"Capacity:64 ",
                price:500,
                    },
                    {
                        title:"iPhone 11 Pro",
                        description:"This is iPhone 11 pro",
                        type:" phone",
                        capacity:"Capacity:256 ",
                        price:600,
                            },
                            {
                                title:"iPhone 8 plus",
                                description:"This is iPhone 8 plus",
                                type:" phone",
                                capacity:"Capacity:128 ",
                                price:300,
                                    },
                                    {
                                        title:"iPhone 7 plus",
                                        description:"This is iPhone 7 plus",
                                        type:" phone",
                                        capacity:"Capacity:64 ",
                                        price:250,
                                            },
    
]

export default productsArray