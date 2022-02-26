function MyCartItem(props) {
    const {id, qty, libelle} = props.data;

    return (
        <li key={id}>{libelle} - {qty}</li>
    )
}

export default MyCartItem;