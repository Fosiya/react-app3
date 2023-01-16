export default function Persons({ persons }){
    const { name, order } = persons

    return(
        <li>
            <h4>{name}</h4>
            <p>Order: {order}</p>
        </li>

    )
}