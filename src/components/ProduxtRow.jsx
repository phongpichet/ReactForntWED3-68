import PropTypes form "prop-types";

export default function ProductRow({product}){
    const name = product.stocked ? product.name :
    <span style={{color: 'red'}}>
        {product.name}
    </span>
}