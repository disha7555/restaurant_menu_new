import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const a=[];
Menu.map((curElem) => {
  curElem.category.map((q)=>{
    // console.log(q);
    a.push(q);
    
  
  })
  
 return a;
})
//console.log(a)
const uniqueList = [
  ...new Set(
    a
  ),
  "All",
];

console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

const newMenuData=[];

  const filterItem = (category1) => {
    if (category1 === "All") {
      setMenuData(Menu);
      return;
    }
   
     
      Menu.map((curElem,index)=>{
        curElem.category.map((ci,cii)=>{
        
          if(ci===category1){
            newMenuData.push(curElem);
            
          }
          //return curElem;
        })
       return newMenuData;
      })
      setMenuData(newMenuData);
      console.log(newMenuData);
    
    }

   

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
