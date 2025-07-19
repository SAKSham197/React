function Item(props) {
    const itemname = props.name
    return (
        <div>
            <p>{itemname}</p>
            {props.children}
        </div>

    )
}

export default Item