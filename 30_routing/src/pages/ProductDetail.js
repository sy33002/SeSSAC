import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productInfos } from './ProductList';

export default function ProductDetail() {
  const { productId } = useParams(); // {productId : '2'}
  const Product = productInfos[Number(productId)-1];

  const navigate = useNavigate();
  return (
    <div>
      <h1>Product Detail Page</h1>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate('/')}>홈으로 이동하기</button>
        <ul>
            <li>상품 번호: {Product.id}</li>
            <li>상품명: {Product.name}</li>
            <li>판매자: {Product.email}</li>
            <li>상세설명: {Product.body}</li>
        </ul>
    </div>
  )
}
 