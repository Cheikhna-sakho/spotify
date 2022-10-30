import { useNavigate } from "react-router-dom";

const Card = ({ lib }) => {
  const navigate = useNavigate();
  const redirectId = () => {
    return navigate(`/albums/${lib.id || lib.album_id}`);
  }
  return (
    <article className="card grid-row" onClick={redirectId} key={lib.id}>
      <div className="cover skeleton">
        <img className="img-cover" src={lib.cover} alt={lib.name} />
      </div>
      <div className="element elips">
        <h2 className="title">{lib.name}</h2>
        <p className="description elips">{lib.description}</p>
      </div>
    </article>
  )
}
export default Card;