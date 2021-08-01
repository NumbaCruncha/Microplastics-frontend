import React, { useState, useEffect } from "react";
import { Jumbotron, Card, CardGroup, Row, Col, Carousel,  Nav,Button, Image } from 'react-bootstrap';
import UserService from "../services/user.service";
import Highlight from "./Highlight";
import background_image from "../static/images/plastics.jpg";
import beach from "../static/images/beach.jpg";
import field_trip from "../static/images/field_trip.jpg";



const Home = () => {
    const [content, setContent] = useState("");
    const [lastItem, setLastItem] = useState("");

  useEffect(() => {
    UserService.getPublicContent("observations").then(
      (response) => {
        setContent(response.data);
        setLastItem(response.data[0]);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);




  
  return (
  <div>
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100 rounded-sm shadow-sm mb-3"
        src={beach}
        alt="First slide"

      />
      <Carousel.Caption>
        <h3>Support citizen science programmes.</h3>
        <p>Students can contribute to real-world scientific investigations to understand environmental impacts.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 rounded-sm shadow-sm"
        src={background_image}
        alt="Second slide"
    
      />
  
      <Carousel.Caption>
        <h3>Become part of the solution.</h3>
        <p>Help identify sources of microplastics in our waterways.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 rounded-sm shadow-sm"
        src={field_trip}
        alt="Third slide"
    
      />
  
      <Carousel.Caption>
        <h3>Move the classroom outdoors with minimal setup.</h3>
        <p>Subscription includes licenses for a fully featured mobile app available for Apple and Android devices.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  
  <Highlight></Highlight>
  </div>
  
  );
};
export default Home;