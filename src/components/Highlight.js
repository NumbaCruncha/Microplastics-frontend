import React from 'react';
import {
    Card,
    CardGroup
} from "react-bootstrap";



const Highlight = () => {
    // const [content, setContent] = useState("");
    // const [lastItem, setLastItem] = useState("");

//   useEffect(() => {
//     UserService.getPublicContent("product").then(
//       (response) => {
//         setContent(response.data);
//         setLastItem(response.data[0]);
//       },
//       (error) => {
//         const _content =
//           (error.response && error.response.data) ||
//           error.message ||
//           error.toString();

//         setContent(_content);
//       }
//     );
//   }, 
//   []);

return(
    <div className="mb-3">
<CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Connect with researchers and investigators.</Card.Title>
      <Card.Text>
        Coordinate your next project with research groups throughout New Zealand.
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Access a wealth of predesigned classroom material. </Card.Title>
      <Card.Text>
      Prepare checklists, project boards data collection guides an{' '}
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>

    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Collect data on mobile devices.</Card.Title>
      <Card.Text>
        Guides, augmented reality, and in-device machine learning minimise observation error and help young scientists collect the best quality data.
      </Card.Text>
    </Card.Body>

  </Card>
</CardGroup>
</div>
);
}

export default Highlight;