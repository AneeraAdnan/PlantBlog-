import React from "react";
import { Footercon } from "../constants/Nav_Links";

const Footer = () => {
  return (
    <footer className="bg-[#e5e5cd] py-6 px-6 mt-10 text-center text-green-900 text-sm">
      {Footercon.map((item,index)=>
         <div key={index}>
          <p>{item.text1}</p>
          <br></br>
          <p>{item.text2}</p>
         </div>
      )}
    </footer>
  );
};

export default Footer;
