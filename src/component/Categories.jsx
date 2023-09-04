import {useState} from 'react'
import Grocery from '../assets/Categories/Grocery.png' 
import Fashion from '../assets/Categories/Fashion.png' 
import Electronic from '../assets/Categories/Electronic.png' 
import Mobile from '../assets/Categories/Mobile.png' 
import { NavLink } from 'react-router-dom'
import CategoryDropdown from './Categories_List'
import upwarArrow from "../assets/upwarArrow.png"
const Categories=()=> {
  
    const categories = [
      { link: "/Grocery", name: "Grocery", img: Grocery, subcategories: [] },
      { link: "/Mobile", name: "Mobile", img: Mobile, subcategories: [] },
      {
        link: "/Fashion",
        name: "Fashion",
        img: Fashion,
        subcategories: [
          {
            name: "Men",
            subcategories: [
              {
                name: "Accessories",
                subcategories: [{ name: "Rings" }, { name: "Lockets" }],
              },
              { name: "Tops" ,subcategories:[] },
              { name: "Pants" ,subcategories:[]},
              { name: "Footwear" ,subcategories:[]},
              { name: "Watches" ,subcategories:[]},
            ],
          },
          {
            name: "Women",
            subcategories: [
              { name: "Tops",subcategories:[] },
              { name: "Sarees",subcategories:[] },
              { name: "Footwear",subcategories:[] },
              { name: "Watches",subcategories:[] },
              { name: "Women's Accessories" ,subcategories:[]},
            ],
          },
          {
            name: "Kids",
            subcategories: [
              { name: "Kid's Tops" ,subcategories:[]},
              { name: "Kid's Pants",subcategories:[] },
              { name: "Footwear",subcategories:[] },
              { name: "Watches",subcategories:[] },
              { name: "Kids's Accessories",subcategories:[] },
            ],
          },
        ],
      },
      { link: "/Electronic", name: "Electronic", img: Electronic, subcategories: [] },
    ];
    
    return (
    <div className='flex flex-row justify-evenly cursor-pointer bg-white shadow-1xl  border-b-2 p-1'>
        
        <div className=" flex w-full justify-evenly">
        {categories.map((category) => (
          <NavLink 
          to={`/product/categories${category.link}`}
            key={category.name}
            className="border border-indigo-200 flex flex-col hover:text-primary"
            onMouseEnter={() => setActiveCategory(category)}
          >
            <img src={category.img} alt={category.name} />
            <div className='flex justify-center items-center '>
            {category.name}
            {category.subcategories.length>0&&<span className='ml-1 '><img src={upwarArrow} className="h-4" /> </span>}
            
            <div className='relative'>
            {/* {<CategoryDropdown categories={category.subcategories}/>} */}
            </div>
            
            </div>
          </NavLink>
        ))}
      </div>
     

    </div>
  )
}

export default Categories