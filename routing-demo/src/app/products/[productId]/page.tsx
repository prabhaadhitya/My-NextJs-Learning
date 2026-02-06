export default async function ProductsDetail (
    { params }:{ params: Promise<{ productId: string }> }) {
        const productId = (await params).productId;
    return (
        <h1>Products Details of {productId}</h1>
    )
}