import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CustomerType} from "../reducers/reducers";

// props: CustomerType

export const Interface = () => {

    const dispatch = useDispatch()
    const cash : any = useSelector<any>((state) => state.cash.cash)
    const customers: any = useSelector<any>(state => state.customers.customers)




    let addMoney = (cash: number) => {
         dispatch({type:'ADD_MONEY', payload: cash})
    }

    let getMoney = (cash: number) => {
        dispatch({type:'GET_MONEY', payload: cash})
    }

    let addCustomer = (name: any) => {
        let customer = {
            name,
            id: Date.now()
        }
        dispatch({type: 'ADD_CUSTOMER', payload: customer})

    }

    let removeCustomer = (customer: []) => {

    }


    return (

        <div>
            <div>{cash}</div>
            <div>{customers}</div>
            <button onClick={() => {addMoney(Number(prompt()))}}>Add money</button>
            <button onClick={() => {getMoney(Number(prompt()))}}>Get Money</button>
            <button onClick={() => {addCustomer(prompt())}}>Add customer</button>
            <div>

                {customers.length > 0 ?
                    <div onClick={() => removeCustomer}>{
                        customers.map((c: any) => {
                            <div>{c.name}</div>
                        })}
                    </div>
                    : <div>'The client is missed' </div>}

            </div>
        </div>
    )
}

