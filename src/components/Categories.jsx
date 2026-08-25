import "../css/categories.css";

function Categories({ products, setSelectCategory, selectCategory }) {
  return (
    <div className="wrapper-categories">
      <h3>Categories</h3>
      <div className="wrapper-categories-grids">
        {Object.keys(products).map((category) => (
          <button
            onClick={() => setSelectCategory(category)}
            key={category}
            className={`category-name ${
              selectCategory === category ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
