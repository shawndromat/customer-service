const products = [
  {category: "Hardware", name: "Phillips Head Screws"},
  {category: "Carpet", name: "Low Pile"},
  {category: "Paint", name: "Primer"},
  {category: "Paint", name: "Interior Paint"}
]

const sizes = {
  "Paint": [".5 gallon", "1 gallon", "5 gallon", "10 gallon"],
  "Hardware": ["1/4 inch", "1/2 inch", "3/4 inch", "1 inch"]
}

const colors = {
  "Paint": ["white", "black", "red", "blue", "yellow"],
  "Carpet": ["ecru", "gray", "brown", "rainbow"]
}

const findProduct = (productId) => (
  products[parseInt(productId) % products.length]
)

export const retrieveProduct = (productId) => (
  {id: productId, ...findProduct(productId)}
)

export const retrieveProductSizes = (name) => (
  sizes[name]
)

export const retrieveProductColors = (name) => (
  colors[name]
)