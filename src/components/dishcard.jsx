import style from './home.module.css';

const DishCard = ({ dish }) => {
  return (
    <div className={style.card}>
      <img
        src="https://plus.unsplash.com/premium_photo-1663854478296-dd00b6257021?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt={dish.category}
        style={{ width: '180px', height: '180px' }}
      />
      <div className={style.details}>
        <div className={style.product}>
          <p className={style.title}>{dish.title}</p>
          <p style={{ color: '#C69F61' }}>$ {dish.price}</p>
        </div>
        <p>{dish.desc}</p>
      </div>
    </div>
  );
};

export default DishCard;
