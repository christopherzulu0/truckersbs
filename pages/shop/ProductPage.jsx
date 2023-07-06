import React from 'react';

import { Link } from 'react-router-dom';

const ProductPage: React.FC = () => {
  return (
    <>
      <div className="container">
        <br />
        <p> <a href="index.html">Products</a> / Shop / Benz  Truck</p>

        <div className="card">
          <div className="row">
            <aside className="col-sm-5 border-right">
              <article className="gallery-wrap">
                <div className="img-big-wrap">
                  <div> <a href="#"><img src="https://loremflickr.com/240/240/car" /></a></div>
                </div>
                <div className="img-small-wrap">
                  <div className="item-gallery"> <img src="https://loremflickr.com/240/240/dog" /> </div>
                  <div className="item-gallery"> <img src="https://loremflickr.com/240/240/dog" /> </div>
                  <div className="item-gallery"> <img src="https://loremflickr.com/240/240/dog" /> </div>
                  <div className="item-gallery"> <img src="https://loremflickr.com/240/240/dog" /> </div>
                </div>
              </article>
            </aside>
            <aside className="col-sm-7">
              <article className="card-body p-5">
                <h3 className="title mb-3 h1">Benz Truck</h3>

                <p className="price-detail-wrap">
                  <span className="price h3 text-dark">
                    <span className="currency">CAD $</span><span className="num">3000</span>
                  </span>
                </p>
                <dl className="item-property">
                  <dt>Description</dt>
                  <dd>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </p>
                  </dd>
                </dl>
                <dl className="param param-feature">
                  <dt>Model#</dt>
                  <dd>12345611</dd>
                </dl>
                <dl className="param param-feature">
                  <dt>Color</dt>
                  <dd>Black and white</dd>
                </dl>
                <dl className="param param-feature">
                  <dt>Delivery</dt>
                  <dd>Zambia - Sudan - Canada</dd>
                </dl>

                <hr />
                <div className="row">
                  <br />
                  <div className="col-sm-5">
                    <dl className="param param-inline">
                      <dt>Quantity: </dt>
                      <dd>
                        <select className="form-control form-control-sm" style={{ width: "70px" }}>
                          <option> 1 </option>
                          <option> 2 </option>
                          <option> 3 </option>
                        </select>
                      </dd>
                    </dl>
                  </div>
                  <div className="col-sm-7">
                    <Link to="/orders" >
                      <div className="btn btn-md btn-outline-primary text-uppercase"> <i className="fa fa-shopping-cart"></i>
                        Add to cart </div>
                    </Link>
                  </div>
                </div>
              </article>
            </aside>
          </div>
        </div>

        <br />
        <hr />
        <div>
          <span className="h2">Comments</span>
        </div>
        <div className="card card-inner">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <textarea name="" id="" rows="4" className="col-md-12">Write your comment.</textarea>
                <p>
                  <a className="float-right btn text-white btn-primary"> <i className="fa fa-send"></i> Post</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-2">
                <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid" />
                <p className="text-center">15 Minutes Ago</p>
              </div>
              <div className="col-md-10">
                <p>
                  <a className="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman
                    Akash</strong></a>
                  <span className="float-right"><i className="text-warning fa fa-star"></i></span>
                  <span className="float-right"><i className="text-warning fa fa-star"></i></span>
                  <span className="float-right"><i className="text-warning fa fa-star"></i></span>
                  <span className="float-right"><i className="text-warning fa fa-star"></i></span>

                </p>
                <div className="clearfix"></div>
                <p>Lorem Ipsum is simply dummy text of the pr make but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.</p>
                <p>
                  <a className="float-right btn btn-outline-primary ml-2"> <i className="fa fa-reply"></i> Reply</a>
                  <a className="float-right btn text-white btn-primary"> <i className="fa fa-heart"></i> Like</a>
                </p>
              </div>
            </div>
            <div className="card card-inner">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-2">
                    <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid" />
                    <p className="text-center">15 Minutes Ago</p>
                  </div>
                  <div className="col-md-10">
                    <p><a href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman
                      Akash</strong></a></p>
                    <p>Lorem Ipsum is simply dummy text of the pr make but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                      containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.</p>
                    <p>
                      <a className="float-right btn btn-outline-primary ml-2"> <i className="fa fa-reply"></i> Reply</a>
                      <a className="float-right btn text-white btn-primary"> <i className="fa fa-heart"></i> Like</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default ProductPage;
