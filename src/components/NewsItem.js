import React from "react";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
    let { title, description, imageURL, newsURL, author,publishedAt, } = props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageURL?"https://img.freepik.com/free-vector/breaking-news-information-concept_52683-36243.jpg?size=626&ext=jpg&ga=GA1.2.309275571.1706365459&semt=sph":imageURL} className="card-img-top" alt="..." width={200} height={250} />
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}..</p>
            <p className="text-sm">By {!author?"Unknown":author}.. on {publishedAt} </p>
            <Link to={newsURL} target="_blank" className="btn btn-dark btn-sm btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
}

export default NewsItem
