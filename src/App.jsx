import './index.css';
function Card(props)
{
//    console.log(props);
    return (
        <>
    <div className="cards">
      <div className="card">
        <img
          src={props.imgsrc}
          alt="myPic"
          width="290"
          height="290"
          className="card__img"
        />
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          <h3 className="card__title">{props.sname}</h3>
          <a href={props.link} target="_blank">
            <button className='btn'>Watch now</button>
          </a>
        </div>
      </div>
    </div>
  </>
    )
}

export default Card;