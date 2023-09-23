import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import Homepage from './Page/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import sanpham from './Page/sanphamPgae/Sanpham';
import Sanpham from './Page/sanphamPgae/Sanpham';
function App() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <CustomPrevArrow />, // Sử dụng component CustomPrevArrow làm nút trước
    nextArrow: <CustomNextArrow />,
  };

  function CustomPrevArrow(props) {
    return (
      <div className="custom-prev-arrow" onClick={props.onClick} style={{
        position: 'absolute',
        left: 0,
        top: '50%', // Để căn giữa theo chiều dọc
        transform: 'translateY(-50%)', // Để căn giữa theo chiều dọc
        display: 'flex',
        zIndex: 100
      }}>
        <ArrowLeftOutlined style={{ fontSize: '24px', color: 'blue' }} />
      </div>
    );
  }

  function CustomNextArrow(props) {
    return (
      <div className="custom-prev-arrow" onClick={props.onClick} style={{
        position: 'absolute',
        right: 0,
        top: '50%', // Để căn giữa theo chiều dọc
        display: 'flex',
        zIndex: 100
      }}>
        <ArrowRightOutlined style={{ fontSize: '24px', color: 'blue' }} />

      </div>
    );
  }



  return (
    <BrowserRouter>
      <Routes>
        <Route >
          <Route path="/" element={<Homepage />} />
          <Route path="Sanpham" element={<Sanpham />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
