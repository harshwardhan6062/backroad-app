
import { TourCardData } from '../data/Data';
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
