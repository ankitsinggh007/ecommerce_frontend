import {useState} from 'react'
import Grocery from '../assets/Categories/Grocery.png' 
import Fashion from '../assets/Categories/Fashion.png' 
import Electronic from '../assets/Categories/Electronic.png' 
import Mobile from '../assets/Categories/Mobile.png' 
import { NavLink } from 'react-router-dom'
import Categories_List from './Categories_List'
const Categories=()=> {
  
    const [visible,setVisible]=useState(false);
    console.log(visible,"visible")
    const categories=[{link:"/",name:'Grocery',img:Grocery},

                      {link:"/",name:'Mobile',img:Mobile},
                      
                      {link:"/",name:'Fashion',img:Fashion,list:true, 
                      tag:
                      [
                        {name:"men",list:true,tag:[{name:"accesories",list:true,tag:["ring","locket","sunglasses"]},"top","pants","footwear","watches"]},
                        {name:"women",list:true,tag:["top","saree","footwear","watches","women's accessories"]},
                        {name:"kids",list:true,tag:["kid's-top","kid's-pants","footwear","watches","kids's accessories"]}]},

                      {link:"/",name:'Electronic',img:Electronic},

]

    return (
    <div className='flex flex-row justify-evenly cursor-pointer  border-b-2 p-2'>
        {categories.map((obj,index)=>{
            return(
                <NavLink className='hover:text-primary  text-sm font-semibold ' onMouseOver={()=>{setVisible(true)}} onMouseLeave={()=>{setVisible(false)}} to={obj.link} key={index}>
                <img className='w-20' src={obj.img} alt={obj.name}  />
                <span >{obj.name}</span>
                <br/>
                <div className='relative'>
                {
                    obj.list && !visible && <span className='rotate-90 '>  &#8964;</span>                    
                }
                  {
                    obj?.tag?.length>0 && visible &&  <Categories_List {...obj} />
                  }
                    </div>
                </NavLink>                
            )
        })}
    </div>
  )
}

export default Categories