export const Endpoints = (endPointObject) => {
    const { limitInput, offsetInput } = endPointObject
    return `products?limit=${limitInput}&offset=${offsetInput}`
}