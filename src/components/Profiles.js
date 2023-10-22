import React from "react";
import "./About.css";
import "./Profiles.css";
import Card from "./card.js";

export default function Profiles() {
  return (
    <>
      <div className="about">Profiles</div>
      <Card
        problems="416"
        rating="1447"
        image="https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/zruiknbedz8yqafxbazb"
        url="https://www.codechef.com/users/vaishu2004"
      />
      <Card
        problems="95"
        rating="1443"
        image="https://cdn.cdo.mit.edu/wp-content/uploads/sites/67/2021/01/0_zuhXdNAIUoxEem4-.png"
        url="https://leetcode.com/mankalavaishnavi2004/"
      />
      <Card
        problems="42"
        rating="348"
        image="https://www.vtvindia.com/uploads/images/image_650x433_5f16a463c740c.jpg"
        url="https://www.hackerrank.com/mankalavaishnav1"
      />
    </>
  );
}
