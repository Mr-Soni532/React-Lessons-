import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'

const Shop = () => {
    return (
        <Container >
            <h2>Buy Shoes</h2>
            <div className='d-flex my-3 '>
                <Button>-</Button>
                <div className='mx-3'>Add to Cart</div>
                <Button>+</Button>
            </div>

        </Container>
    )
}

export default Shop