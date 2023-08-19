
export const formateName=(name)=>{

name=name?.split(" ")?.map(ele=>ele[0]?.toUpperCase()+ele?.slice(1)).join(" ");

return name;


}




