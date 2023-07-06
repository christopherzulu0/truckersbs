import React from 'react'

const ProductDashboardMenu = () => {
  return (
    <>
      <h2>Product Dashboard</h2>
      <br />
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#products">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#orders">Orders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#address">Address</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#payment">Payment Method</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#account">Account Details</a>
        </li>
      </ul>

      <hr />
    </>
  );
};

export default ProductDashboardMenu;