import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  // <Summary/>
  // routes-use-params
  // useParams hook gives access to the url params
  const params = useParams();
  console.log(params.productId);
  return (
    <div>
      <h2>Product Detail Page</h2>
      <p>{params.productId}</p>
    </div>
  )
}