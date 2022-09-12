
const CardDetail = ({article}) => {
    return (
        <article>
            <div className="cover-article">
                <img src={article.cover} alt={article.name} />
            </div>
            <div className="desc">
                <p>{article.description}</p>
            </div>
            <div className="item-article">
                <div className="item">
                {article.name}
                </div>
            </div>
        </article>
        )
}
export default CardDetail;