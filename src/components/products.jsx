import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function Products(props){
    return(
    //     <div class ="products">
    //   <Card.Img src ={props.image}/>
    //   <p>{props.title}</p>
    //   <p>{props.price}</p>
    //   <p>{props.description}</p>

    // </div>
    <Card id="card-container">
    <Card.Img variant="top" className ="img" src={props.image} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text className ="price">{props.price}</Card.Text>
      <Card.Text>{props.description}</Card.Text>
      <Button variant="primary" className ="myBtn">Buy Now</Button>
      <Button variant="warning">Add to Cart</Button>
    </Card.Body>
  </Card>
    )
}

export default Products;