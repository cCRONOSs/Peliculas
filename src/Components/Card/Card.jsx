import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FiStar} from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import "./Card.css"



export default function CardComponent(props){
    const [isFavorite, setIsFavorite] = useState(false);
  
    const handlerLike = () => {
      setIsFavorite(false);
    };
    return(
        <Card style={{ width: '20rem', height:'650px' }}>
      <Card.Img variant="top" src={props.portada} />
      <Card.Body>
        {isFavorite ? (
          <AiFillStar className="icon-star" onClick={handlerLike}/> 
        ) : (
          <FiStar
          className="icon-star-empty"
          onClick={() => {
            setIsFavorite(true);
          }}
          />
        )
        }
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary" id="colors-btn">PLAY</Button>
      </Card.Body>
    </Card>
    );
}