// let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard']
// let PRICES = [100, 120, 1000, 15, 18]
// let IDS = [0, 1, 2, 3, 4]  

// let products = []
const image = 'https://placehold.it/200x150'
const cartImage = 'https://placehold.it/100x80'

class List {
    constructor (url, container) {
        this.url = url
        this.container = container
        this.item = []
        this._init ()
    }
    _init () {
        return false
    }
    getData (url) {
        return fetch(url).then(d => d.json())
    }
    render () {
        let block = document.querySelector(this.container)
        let htmlStr = ''
        this.items.forEach (item => {
            // let newProd = new CatalogItem(item).getTemplate()
            // let newProd = new CartItem(item).getTemplate()
            let newProd = new classesDependency [this.constructor.name](item)
            htmlStr += newProd.getTemplate ()
        })
        block.innerHTML = htmlStr
    }
 }
class Item {
    constructor (obj, img = image) {
        this.product_name = obj.product_name
        this.price = obj.price
        this.id_product = obj.id_product

    }
}


class Catalog extends List {}
class Cart extends List {}

class CatalogItem extends Item {}
class CartItem extends Item {}

let classesDependency = {
    Catalog: CatalogItem,
    Cart: CartItem
}
// function createProduct (product) {
//     return {
//         product_name: product.product_name,
//         price: product.price,
//         id_product: product.id_product,
//         img: 'https://placehold.it/200x150',
//         createTemplate () {
//             return `
//                 <div class="product-item" data-id="${this.id_product}">
//                 <img src="${this.img}" alt="${this.product_name}">
//                 <div class="desc">
//                     <h3>${this.product_name}</h3>
//                     <p> ${this.price} </p>
//                     <button class="buy-btn"
//                         name="buy-btn"
//                         data-id="${this.id_product}"
//                         data-name="${this.product_name}"
//                         data-price="${this.price}">
//                         Купить
//                     </button>
//                 </div>
//             </div>
//             `
//         }
//     }
// }

// let catalog = {
//     items: [],
//     conteiner: '.products',
//     cart:null,
//     catalogUrl: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',

//     init () {
//         this.items = [],
//         this.cart = cart
//         this.getDate (this.catalogUrl)
//             .finally(() => {
//                 this._fetchItems ()
//                 this._render ()
//             })
//         document.querySelector(this.conteiner).addEventListener ('click', evt => {
//             if (evt.target.name === 'buy-btn') {
//                 this.cart.addProduct(evt.target.dataset)
//             }
//         })    
//     },
//     getData (url) {
//         return fetch(url)
//                 .then(data => data.json())
//                 .then((data2) => {this.items = data2})
//     },
//     _fetchItems () {
//         let arr = []

//         this.items.forEach (item => {
//             arr.push (createProduct (item))
//         })
//         console.log(arr)
//         this.items = arr
//     },
//     _render () {
//         let conteiner = document.querySelector(this.conteiner)
//         let domString = ''

//         this.items.forEach (item => {
//             domString += item.createTemplate ()
//         })
//         conteiner.innerHTML = domString
//     }
// }

// let cart = {
//     items: [],
//     shown: false,
//     sum: 0,
//     qua: 0,
//     container: '.cart-block',
//     itemsContainer: '.cart-items',

//     init() {
//         document.querySelector('#toggle-cart').addEventListener('click', () => {
//             cart.shown = !cart.shown
//             cart.render ()
//             document.querySelector('.cart-block').classList.toggle('invisible')
//         })

//         document.querySelector(this.container).addEventListener('click', (evt) => {
//             if(evt.target.name === 'del-btn') {
//                 this.removeProduct(evt.target.dataset.id)
//             }
//         })
//     },
//     render () {
//         let container = document.querySelector(this.itemsContainer)
//         let domString = ''

//         this.items.forEach (item => {
//             domString += item.createTemplate ()
//         })
//         container.innerHTML = domString

//         document.querySelector ('#tot-sum').innerHTML = this.sum
//         document.querySelector ('#tot-qua').innerHTML = this.qua
//     },

//     addProduct (product) {
//         let find = this.items.find (item => item.id_product === product.id)
//         if (!find) {
//             this.items. push (createCartItem (product.id, product.name, product.price))
//         } else {
//             find.quantity++
//         }
//         this.checkTotal ()
//         this.render ()
//     },

//     removeProduct (id) {
//         let find = this.items.find (item => item.id_product === id)
//         if  (find.quantity === 1) {
//             this.items.splice(this.items.indexOf(find), 1)
//         } else {
//             find.quantity--
//         }
//         this.checkTotal ()
//         this.render ()
//     },
//     checkTotal () {
//         let s = 0
//         let q = 0

//         this.items.forEach (item => {
//             q += item.quantity
//             s += item.quantity * item.price
//         })

//         this.sum = s
//         this.qua = q
//         }
//     }
//     init ();
