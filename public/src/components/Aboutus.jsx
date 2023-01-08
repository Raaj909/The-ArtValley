import React from "react";
import "./Aboutus.css";
const Aboutus = () => {
  return (
    <div className="about">
      <div className="card">
        <h1 className="card-title">Building an open digital economy</h1>
        <p className="abouttxt">
          At ArtValLey, we're excited about a brand new type of digital good
          called a non-fungible token, or NFT. NFTs have exciting new
          properties: they’re unique, provably scarce, tradeable, and usable
          across multiple applications. Just like physical goods, you can do
          whatever you want with them! You could throw them in the trash, gift
          them to a friend across the world, or go sell them on an open
          marketplace. But unlike physical goods, they're armed with all the
          programmability of digital goods. A core part of our vision is that
          open protocols like Ethereum and interoperable standards like ERC-721
          and ERC-1155 will enable vibrant new economies. We're building tools
          that allow consumers to trade their items freely, creators to launch
          new digital works, and developers to build rich, integrated
          marketplaces for their digital items. We’re proud to be the first and
          largest marketplace for NFTs.
        </p>
      </div>
      <div className="image">
        <img className="about-img" src="https://openseauserdata.com/files/714ffa9dda7702741aef3ae2444d160d.svg" alt="opp`s" />
      </div>
    </div>
  );
};

export default Aboutus;
