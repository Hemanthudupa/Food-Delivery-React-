
export const RestroCard = ({food:{strCategoryThumb,strCategory,strCategoryDescription}}) => {
  return (
    <div className="res-card">
      <img className="res-img" src={strCategoryThumb} />
      <div className="res-card-content">
        <h3>{strCategory}</h3>
        <p className="content">{strCategoryDescription}</p>

        <div className="ratings">
          <h5>{(4 + Math.random()).toFixed(1)}</h5>
        </div>
      </div>
    </div>
  );
}; 