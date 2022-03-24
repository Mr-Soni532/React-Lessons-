import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Col, Container, Row } from 'react-bootstrap';

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INC' })
  }
  const decrement = () => {
    dispatch({ type: 'DEC' })
  }
  const addBy = () => {
    dispatch({ type: 'ADD', payload: 10 })
  }
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center'>
        <Row>
          <h1>Counter App</h1>
          <Col className='d-flex justify-content-center align-items-center my-3'>
            <Button onClick={decrement}>-</Button>
            <h2 className='mx-3'>{counter}</h2>
            <Button onClick={increment}>+</Button>
          </Col>
          <Button onClick={addBy}>Add</Button>
        </Row>
      </Container>
    </>
  );
}

export default App;
