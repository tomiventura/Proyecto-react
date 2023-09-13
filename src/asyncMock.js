const products = [
    {
        id:'1',
        name:'Camiseta Real Madrid',
        price: 25000,
        category:'CamisetasEspaña',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftiendayofutbol.es%2Finicio%2F2568-camiseta-real-madrid-cf-adidas.html&psig=AOvVaw30x4r7rTga6glzN3-cGNLw&ust=1694669378053000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJCynsTtpoEDFQAAAAAdAAAAABAE',
        stock: 20,
        description: 'Camiseta titular Real Madrid'
    },
    {
        id:'2',
        name:'Camiseta Barcelona',
        price: 27000,
        category:'CamisetasEspaña',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thecornerstore.com.ar%2Fproductos%2Fcamiseta-titular-barcelona-fc-22-23%2F&psig=AOvVaw3KOpE9JS4E1KdSqdRtpELV&ust=1694669323949000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKjesartpoEDFQAAAAAdAAAAABAJ',
        stock: 16,
        description: 'Camiseta titular Barcelona'
    },
    {
        id:'3',
        name:'Camiseta River Plate',
        price: 30000,
        category:'CamisetasArgentina',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2F697354323540885123%2F&psig=AOvVaw0ZfnUubIM1bWrzQpVyqvsE&ust=1694669285332000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKiWgpjtpoEDFQAAAAAdAAAAABAE',
        stock: 9,
        description: 'Camiseta titular River Plate'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductbyId = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}