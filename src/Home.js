import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://www.amazon.com/images/G/01/AmazonExports/Fuji/2020/March/Fuji_TallHero_ShipATW_Modified_en_US_1x._CB419795291_.jpg"
        alt=""
      ></img>

      <div className="home_row">
        {/* Product id, title, price, image, rating*/}
        <Product
          id="123"
          title="Fossil R300 Sport Watch"
          price={55}
          image="https://www.amazon.com/images/I/819WMWm6NoL._AC_SX425_.jpg"
          rating={4}
        />
        <Product
          id="129"
          title="Fossil R300 Sport Watch"
          price={29}
          image="https://m.media-amazon.com/images/I/71ZCqEa2vBL._AC_UX569_.jpg"
          rating={5}
        />
      </div>
      <div className="home_row">
        <Product
          id="563"
          title="Fossil R300 Sport Watch"
          price={21}
          image="https://m.media-amazon.com/images/I/81C1rEG58VL._SY466_.jpg"
          rating={4}
        />
        <Product
          id="293"
          title="Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life, Effortless Setup. Bluetooth Headphones for iPhone"
          price={129}
          image="https://m.media-amazon.com/images/I/61Zh467pKjL._AC_SX522_.jpg"
          rating={4}
        />
        <Product
          id="186"
          title="C4 Energy Carbonated Zero Sugar Energy Drink, Pre Workout Drink + Beta Alanine, Orange Slice, 16 Fl Oz (Pack of 12)"
          price={24}
          image="https://m.media-amazon.com/images/I/81AMC4AzffL._AC_SX679_PIbundle-12,TopRight,0,0_SH20_.jpg"
          rating={4}
        />
      </div>
      <div className="home_row">
        <Product
          id="A23"
          title="EKWQ 7ft Bean Bag Inner Liner Cover,(No Filler) 6 7ft Inner Liner for Bean Bag Chair Couch Cover Seat Lazy Sofa High Capacity Replacement Cover with Zipper (Size : 7ft Liner)"
          price={24}
          image="https://m.media-amazon.com/images/I/61pIhpa4BOS._AC_SX569_.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
