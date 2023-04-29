
import { TourCardData } from '../data/Data';
import tour1 from  '../images/tour-1.jpeg';
import tour2 from '../images/tour-2.jpeg';
import tour3 from '../images/tour-3.jpeg';
import tour4 from '../images/tour-4.jpeg';
import { TourCard } from './TourCard';

export const Tours = () => {
    return (
        <section className="section" id="tours">
            <div className="section-title">
                <h2>featured <span>tours</span></h2>
            </div>

            <div className="section-center featured-center">
                {TourCardData.map((tourCard) => {
                    return <TourCard {...tourCard}/>
                })}
            </div>
        </section>
    );
}
