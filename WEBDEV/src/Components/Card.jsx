let age = 18;

let btnText = "Not Av";
if (age >= 18) {
  btnText = "Watch Now";
}
const image_style = { width: 200, height: 300 };

export const Card = (props) => {
  const { id, Title, imgsrc, Rating, Review, Year, Duration, link, Details } =
    props.currentdata;
  const clname = Rating >= 8 ? "super-hit" : "hit";
  return (
    <div className="Card" key={id}>
      <div className="img">
        <img src={imgsrc} style={image_style}></img>
      </div>
      <div className="Details">
        <div className="Title">
          <h2>{Title}</h2>
        </div>
        <div className="Rating">
          <p className={`${clname} this-is-another-class`}>{Rating}</p>
          <p>{Review}</p>
          <p>{Year}</p>
          <p>{Duration}</p>
        </div>
        <div className="About">{Details}</div>
        <div className="Buttons">
          <a href={link} target="_blank">
            <button className="Watch_btn btn">{btnText}</button>
          </a>

          <button className="Cart_btn btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
