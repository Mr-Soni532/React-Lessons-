import React from 'react'
import { Button, Container} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from '../state/index'
const Shop = () => {
    const dispatch = useDispatch()
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch)
    return (
        <Container >
            <h2>Depoiste/Withdraw Money</h2>
            <div className='d-flex my-3 '>
                <Button onClick={()=>{withdrawMoney(100)}}>-</Button>
                <div className='mx-3'>Update Balance</div>
                <Button onClick={()=>{depositMoney(100)}}>+</Button>
            </div>

        </Container>
    )
}

export default Shop