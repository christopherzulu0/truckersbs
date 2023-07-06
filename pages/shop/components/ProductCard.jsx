import React from 'react';

import { Link } from 'react-router-dom';

const ProductCard: React.FC = () => {
    return (
        <>
            <div className="col-md-4 col-lg-3 col-xl-3">
                <div className="card" style={{ borderRadius: "15px", backgroundColor: "#eee" }}>
                    <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                        data-mdb-ripple-color="light">
                        <Link to="/product">
                            <img src="https://loremflickr.com/240/240/truck"
                                style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px", width: "100%", height: "100%" }}
                                className="img-fluid" alt="Item" />
                        </Link>
                        <a href="#!">
                            <div className="mask"></div>
                        </a>
                    </div>
                    <div className="card-body pb-0">
                        <div className="d-flex justify-content-between">
                            <div>
                                <p><a href="product.html" className="text-dark">Benz Truck</a></p>
                            </div>
                        </div>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body pb-0">
                        <div className="d-flex justify-content-between btn-group">
                            <p><a href="#!" className="btn btn-md btn-dark">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </a></p>
                            <p className="text-dark btn btn-primary">K 3000</p>
                        </div>
                    </div>
                    <br />
                </div>
                <br />
            </div>
        </>
    );
};

export default ProductCard;