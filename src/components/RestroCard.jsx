
export const RestroCard = ({food:{strMealThumb,strMeal}}) => {
  return (
    <div className="res-card">
      <img className="res-img" src={strMealThumb} />
      <div className="res-card-content">
        <h3>{strMeal}</h3>
        <div className="ratings">
          <h5>{(4 + Math.random()).toFixed(1)}</h5>
          {/* <p>{deliveryTime}</p> */}
        </div>
      </div>
    </div>
  );
}; 