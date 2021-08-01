import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';




    

// handleChange = (e) => {
//   let { name, value } = e.target;

//   if (e.target.type === "checkbox") {
//     value = e.target.checked;
//   }

//   const activeItem = { ...this.state.activeItem, [name]: value };

//   this.setState({ activeItem });
// };


export default function LoginForm(props) {
   
    const [user, setUser] = useState(null);
    const [pwd, setPwd] = useState(null) 
    const [data, onSave] = useState(null);
    // const handleShow = () => setShow(true);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `user: ${user} and pwd: ${pwd}`;
    });
    return (
  
        <Form >

          <Form.Group controlId="formUserName">
            <Form.Label>Username: </Form.Label>
            <Form.Control 
              type="text" 
              id="input-user"
              value = {user}
              placeholder="Enter username" 
              />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password: </Form.Label>
            <Form.Control 
              type="password" 
              value={pwd} 
              placeholder="Enter password" 
              />
          </Form.Group>

          <Button 
          onClick={() => onSave(
            setUser(user),
            setPwd(pwd)
          )}
          variant="primary" 
          type="submit"
          
          >
            Submit
          </Button>
        </Form>
  
    );
  }
  
