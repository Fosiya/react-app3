import { useState } from 'react'
import styles from './OrderForm.module.scss'

export default function OrderForm() {
    const [name, setName] = useState('')
    const [order,setOrder] = useState('')

    
    const handleSubmit = async (e) => {

        e.preventDefault() 
        
        const addOrder = {
            name, order
        }

        if (addOrder.name === "" || addOrder.order === "") {
            alert("Make sure to fill out the form correctly!");
            return false;
          }
    
        const res = await fetch('http://localhost:3001/persons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addOrder)
        })

        if (res.ok) {
            setName('')
            setOrder('')
            alert("Thanks for your order the kitchen is preparing your delicious meal!");
        }
    }

    return (
        <div className={styles.sendOrder}>
            <form onSubmit={handleSubmit}> 
                <label>Name:</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input> <br/>
                <label>Your Order:</label>
                <input type='text' value={order} onChange={(e) => setOrder(e.target.value)}></input> <br/>
                <button>Place order</button>
            </form>
        </div>
    )
}