import { servicesData } from "../data/Data";
import { Service } from "./Service";


export const Services = () => {
    return (
        <section className="section services" id="services">
            <div className="section-title">
                <h2>our <span>services</span></h2>
            </div>
            <div className="section-center services-center">

                {servicesData.map((data) => {
                    return <Service {...data}/>
                })}
                
            </div>
        </section>
    );
}
