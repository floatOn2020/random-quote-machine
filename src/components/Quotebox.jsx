import React from 'react'
import './Quotebox.scss';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const Quotebox = (props) => {
  return (
    <div id="quote-box" className=''>
      <Card className="mx-auto mt-5 p-3" style={{ width: '30rem'}}>
        <Card.Body>
          <Card.Text id='text'>{props.text}</Card.Text>
          <Card.Text id='author'>{props.author}</Card.Text>
          <Row className="justify-content-between">
            <a className='btn btn-info m-1 col' target='_blank' href={`https://twitter.com/intent/tweet?text=${props.text}.+ ++author:+ +${props.author}`} id='tweet-quote'><i class="fab fa-twitter"></i>tweet this quote</a>
            <Button id='new-quote' className='col m-1 flex-grow-1' variant="info" onClick={props.onClick}>New quote</Button>
          </Row>
        </Card.Body>
      </Card>
    </div>
    );
}

export default Quotebox;
