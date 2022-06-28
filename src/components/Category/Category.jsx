import "./Category.scss";
import * as type from "../../store/action";
import { useDispatch } from "react-redux";

function Category({ onClick }) {
  const category = [1, 2, 3, 4, 5,6,7,8,9,10];
  return (
    <div className="category">
      <div className="category_wrap">
        {category.map(function (item, index) {
          return (
            <button
              key={index}
              onClick={() => {
                onClick(item);
              }}
              className="category_item"
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
