import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date} = this.props;
    return (
      
            <div className="card my-2">
              <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2023/05/20/600x338/2-0-148367908-SEBI-4C-0_1681022876782_1684585537713.jpg" : imageUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {description}
                </p>
                <p className="card-text"><small className="text-body-secondary">BY {!author?"Unknown" : author}{new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">
                  Read More
                </a>
              </div>
            </div>
    );
  }
}

export default NewsItem;
