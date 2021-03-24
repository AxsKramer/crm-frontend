import React from 'react';
import { Link } from "react-router-dom";
import './RoundButton.css';

const RoundButton = ({fontawesome, url, title}) =>  (
  <Link to={url} className="round-btn bg-blue pos-absolute" title={title}>
    <i className={`${fontawesome} icon`}></i>
  </Link>
)

export default RoundButton
