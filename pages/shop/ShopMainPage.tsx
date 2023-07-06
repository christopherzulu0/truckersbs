import React from 'react';
import { Link } from 'react-router-dom';

import ProductCard from './shop/components/ProductCard';

const MainPage: React.FC = () => {
  return (
    <>
      <section className="offer_section layout_padding" style={{ backgroundColor: "#eee" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="box offer-box1">
                <img src="https://loremflickr.com/240/240/car" alt="" />
                <div className="detail-box">
                  <h2>
                    Footware
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <div className="box offer-box1">
                <img src="https://loremflickr.com/240/240/car" alt="" />
                <div className="detail-box">
                  <h2>
                    Disel
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="box offer-box2">
                <img src="https://loremflickr.com/240/240/car" alt="" />
                <div className="detail-box">
                  <h2>
                    Parts
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <div className="box offer-box3">
                <img src="https://loremflickr.com/240/240/car" alt="" />
                <div className="detail-box">
                  <h2>
                    Trailers
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className="shop_section layout_padding">
        <div className="container py-5">
          <div className="heading_container heading_left">
            <h1> Products </h1>
          </div>
          <div className="row justify-content-left">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
