import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'


function navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <Link to=""><a class="navbar-brand" href="#">Ciminelli Software</a></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link to="/category/Graphics"><a class="nav-link active" aria-current="page" href="#">Graphics</a></Link>
                </li>
                <li class="nav-item">
                <Link to="/category/Processor"><a class="nav-link" href="#">Processor</a></Link>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
                </li>
            </ul>
            </div>
        </div>
        <div>
        <CartWidget/>
        </div>
        
        </nav>
        );
        }
        
    export default navbar;