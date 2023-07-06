import React from "react";

import ProductDashboardMenu from "./components/ProductDashboardMenu";

const OrderHistory = () => {
    return (
        <>
            <div className="container">
                <ProductDashboardMenu />
                <br />
                <div className="container">
                    <div className="tab-content">
                        <div id="products" className="container tab-pane fade"><br />
                            <h3>Products</h3>
                        </div>
                        <div id="orders" className="container tab-pane active"><br />
                            <div className="">
                                <div className="row">
                                    <div className="col-12 col-sm-8 col-lg-10">
                                        <h6 className="text-muted">Order History</h6>
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                <div className="image-parent">
                                                    <img
                                                        src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/don_quixote.jpg"
                                                        className="img-fluid" alt="quixote" />
                                                </div>
                                                Don Quixote
                                                <div>
                                                    <div className="starrating risingstar d-flex justify-content-center flex-row-reverse">
                                                        <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="5 star">
                                                        </label>
                                                        <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="4 star">
                                                        </label>
                                                        <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="3 star">
                                                        </label>
                                                        <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="2 star">
                                                        </label>
                                                        <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="1 star">
                                                        </label>
                                                    </div>
                                                </div>

                                                <div> <button className="btn btn-outline-primary">Rate</button> </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="address" className="container tab-pane fade"><br />
                            <h3>Address</h3>
                        </div>
                    </div>
                </div>
            </div >

            <br />
        </>
    );
};

export default OrderHistory;