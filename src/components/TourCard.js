



export const TourCard = ({ heading, description, destination, duration, cost, tourDate, tourImage }) => {
    return (
        <article className="tour-card">
        <div className="tour-img-container">
            <img src={tourImage} className="tour-img" alt="" />
            <p className="tour-date">{tourDate}</p>
        </div>
        <div className="tour-info">
            <h4>{heading}</h4>
            <p>
            {description}
            </p>
            <div className="tour-footer">
            <p>
                <span><i className="fas fa-map"></i></span> {destination}
            </p>
            <p>{duration}</p>
            <p>{cost}</p>
            </div>
        </div>
        </article>
    )
}

