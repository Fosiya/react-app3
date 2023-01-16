import { useState, useEffect } from 'react' 
import Persons from "../comp/Persons" 
import styles from './AllOrders.module.scss'

 
export default function AllOrders() {
    const [allOrders, setAllOrders] = useState([])

        useEffect(function () {
            async function showPersons() {
                const res = await fetch('http://localhost:3000/persons')
                const persons = await res.json()

                setAllOrders(persons)
            }

            showPersons()
        }, [])

    return (
        <>
        <ul className={styles.allOrder}>
        <h3>All orders</h3>
            {allOrders.map(persons => <Persons key={persons.id} persons={persons} />)} 
        </ul>
        </>

    )
}