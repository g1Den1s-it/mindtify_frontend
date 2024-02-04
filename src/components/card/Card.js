import "./Card.css";
import React from "react";
import {Link} from "react-router-dom";
const Card = ({img, slug, name}) => {
    const defaultImage = "/default/cardDefaultImage.png";
    return (
        <Link className="card" to={"/" + slug + "/"} data-testid={`card-${slug}`}>
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
        </Link>
    );
}
export default Card;