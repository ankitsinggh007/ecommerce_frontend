const Subcategory = ({ subcategories }) => {
  return (
    <ul className="dropdown-menu">
      {subcategories.map((subcategory) => (
        <li key={subcategory.name} className="dropdown-item">
          {subcategory.name}
          {subcategory.subcategories && subcategory.subcategories.length > 0 && (
            <Subcategory subcategories={subcategory.subcategories} />
          )}
        </li>
      ))}
    </ul>
  );
};

const CategoryDropdown = ({ categories }) => {
  return (
    <div className="absolute z-20">
      <Subcategory subcategories={categories} />
    </div>
  );
};
export default CategoryDropdown;