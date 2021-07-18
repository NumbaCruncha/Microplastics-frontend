import { Jumbotron, Button, Image, Row, Col, Container } from 'react-bootstrap';
import '../../App.css';
import background_image from "./plastics.jpg";

 export default function Jumbo() {

    return (
     <div>
            <Jumbotron className="App-body">
                
           
                <h1>Every journey starts with a map.</h1>
    
                <div className="App-emphasis">
                    This project demonstrates a cloud-hosted,
                </div>
                <div className="mb-3" className="App-emphasis">user-authenticated geodatabase and map service.</div>
                <div>
                <Button  className="mb-3"  href="/login">Login</Button> 
                </div>
                
                
                <Image className="App-jumbo" thumbnail='true' rounded='true' src= {background_image}/>
            
            </Jumbotron>
            </div>
            )
    };
