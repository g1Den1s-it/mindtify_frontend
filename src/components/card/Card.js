import "./Card.css";
const Card = ({img, slug, name}) => {
    const defaultImage = "/default/cardDefaultImage.png";
    return (
        <a className="card" href={"/" + slug + "/"}>
            {!img
                ?
                    <div className="card-img" style={{backgroundImage: `url("${defaultImage}")`}}>
                        <div className="card-wrapper">
                            <p className="card-text text">{name}</p>
                        </div>
                    </div>
                :
                <div className="card-img" style={{backgroundImage: `url("${img}")`}}>
                    <div className="card-wrapper">
                        <p className="card-text text">{name}</p>
                    </div>
                </div>
            }
        </a>
    );
}
export default Card;