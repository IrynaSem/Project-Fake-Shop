type Product ={
    id:number
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const productsArray:Product[] =[
    {
        id: 1,
title:"iPhone 14 Pro",
description:"This is iPhone 14 pro",
type:" phone",
capacity:"Capacity:256 ",
price:1200,
    },
    {
        id: 2,
        title:"iPhone 13 Pro",
        description:"This is iPhone 13 pro",
        type:" phone",
        capacity:"Capacity:128 ",
        price:900,
            },
            {
                id:3,
                title:"iPhone 12 Pro",
                description:"This is iPhone 12 pro",
                type:" phone",
                capacity:"Capacity:64 ",
                price:500,
                    },
                    {
                        id:4,
                        title:"iPhone 11 Pro",
                        description:"This is iPhone 11 pro",
                        type:" phone",
                        capacity:"Capacity:256 ",
                        price:600,
                            },
                            {
                                id:5,
                                title:"iPhone 8 plus",
                                description:"This is iPhone 8 plus",
                                type:" phone",
                                capacity:"Capacity:128 ",
                                price:300,
                                    },
                                    {
                                        id:6,
                                        title:"iPhone 7 plus",
                                        description:"This is iPhone 7 plus",
                                        type:" phone",
                                        capacity:"Capacity:64 ",
                                        price:250,
                                            },
    
]

export default productsArray