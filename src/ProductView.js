const ProductView = (props) => {
    const product = props.Product;
    console.log(props);
return (
    <div class="product-container">
		<img src={product.image} alt={product.title} class="product-image" />
		<div class="product-info">
			<h2 class="product-name">{product.title}</h2>
			<p class="product-price">{product.price}</p>
			<p class="product-description">{product.description}</p>			
		</div>
	</div>
);
}
export default ProductView