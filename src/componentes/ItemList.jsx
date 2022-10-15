import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';



const ItemList = ({ products })=> {
    return(
    <div className='boxProductos'>
    {products.map((product) => 
        
      <div>
        <Card style={{ width: '18rem' }} className="Card">
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              $ {product.price}
            </Card.Text>
            
            <Link to={`/item/${product.id}`}><Button id = "botonDetalle" variant="secondary" className='boton-detalle' > Ver detalle </Button></Link>
          </Card.Body>
        </Card>
      </div>
        )}
    </div>
    );

}



export default ItemList;
