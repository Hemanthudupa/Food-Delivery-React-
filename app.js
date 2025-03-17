import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-logo-by-abhishek-choudhary-dribbble.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};



const RestroCard = ({menu,ratings,resName,deliveryTime,img}) => {
  return (
    <div className="res-card">
      <img 
        className="res-img"
        src={img}
      />
      <div className="res-card-content">
        <h3>{resName}</h3>
        <p>{menu}</p>
        <div className="ratings">
          <h5>{ratings}</h5>
          <p>{deliveryTime}</p>
        </div>
      </div>
    </div>
  );
};

  
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="restro-container">
        <RestroCard img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/x4uyxvihmg8qa3pddkgf" resName="Meghana Foods" menu="Biriyani,North Indian,South Indian" ratings="4.3" deliveryTime="38 mins"/>
        <RestroCard img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4398bfb2-6948-484a-9613-2d7628a2457a_588619.JPG" resName="KFC" menu="Burger" ratings="4.8" deliveryTime="19 mins"/>
     
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {/*
      this should have 
    header 
    body
    footer  */}
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
