const CardGenre = ({ genre }) => {
  const changeBG = () => {
    const col1 = getRandomRGB();
    const col2 = getRandomRGB();
    const col3 = getRandomRGB();
    const colorString = `rgb(${col1}, ${col2}, ${col3})`;
    return colorString;
  }

  const getRandomRGB = () => {
    return Math.floor(Math.random() * 256);
  }
  const bgColor = changeBG();
  return (
    <article className="card grid-row" key={genre.id}>
      <div style={"background: "+bgColor} ></div>
      <div>
        <h2 className="title">{genre.name}</h2>
      </div>
    </article>
  )
}
export default CardGenre;