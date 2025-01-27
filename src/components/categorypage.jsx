import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { APPContext } from './mainpage';
import DishCard from './DishCard';
import style from './home.module.css';

const CategoryPage = (props) => {
  const { dishes } = useContext(APPContext);
  const { category } = useParams();
  
  const selectedCategory = category || props.category;

  const filteredDishes =
    selectedCategory === 'all'
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);

  return (
    <div className={style.allcards}>
      {filteredDishes.map((dish, key) => (
        <DishCard key={key} dish={dish} />
      ))}
    </div>
  );
};

export default CategoryPage;
