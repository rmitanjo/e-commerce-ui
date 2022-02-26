function MyCartItem(props) {
    const {id, qty} = props.data;

    return (
        <li key={id}>{id} - {qty}</li>
    )
}

export default MyCartItem;