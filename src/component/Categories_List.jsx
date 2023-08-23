const Category = ({ name, tag }) => {
    if (!tag) {
      return <li>{name}</li>;
    }
  
    return (
      <li>
        {name}
        <ul>
          {tag.map((subcategory,index) => (
            <Category key={index} {...subcategory} />
          ))}
        </ul>
      </li>
    );
  };
  
  export default Category;