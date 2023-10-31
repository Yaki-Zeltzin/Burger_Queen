import { Link } from "react-router-dom"


const ProductCard = ({id, image, name, price}) => {
    return (
        <article className="product" key={id}>
            <Link to={`/products/${id}`}>
                <img className="img-products"
                    src={image}
                    alt={name}
                    id={id}
                />
            </Link>
            <p className="item-product">Producto: {name}
                <span> ${price}</span></p>
        </article>
    )
}

export default ProductCard