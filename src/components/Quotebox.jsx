import React from 'react'
import './Quotebox.scss';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const Quotebox = (props) => {
  return (
    <div id="quote-box" className="mx-auto p-3 ">
      <div>
        <div id='text'>{props.text}</div>
        <div className='mt-2' id='author'><em id='author'>{props.author}</em></div>
      </div>
      <div className=''>
        <Button id='new-quote' className='mt-5' variant="secondary" onClick={props.onClick}>New quote</Button>
        <a className="mt-5 btn btn-info tweet-button"
          target='_blank'
          href={`https://twitter.com/intent/tweet?text=${props.text}.+ ++author:+ +${props.author}`} id='tweet-quote'>
          <i className="fab fa-twitter">tweet this</i>
        </a>
      </div>
    </div>
    );
}

export default Quotebox;
