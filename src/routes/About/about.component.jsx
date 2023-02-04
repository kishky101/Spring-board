import RoutesHero from '../../components/routes-hero/routes-hero.component';
import CustomSpan from '../../components/custom-span/custom-span.component';
import GetInTouch from '../../components/get-in-touch/get-in-touch.component';

import './about.styles.scss';

const About = () => {
    return (
        <div className='about-container'>
            <RoutesHero />
            <div className='about-text-container'>
                <div className='about-text'>
                    <h2 className='about-text-header'>About us</h2>
                    <p>Springboard Language Academy is a reputable online language academy that offers international language services ranging from training, translation, communication among other related activities. It was registered with Nigerian Corporate Affairs Commission (CAC) as a business name as: Springboard Language Concept in 2012. It operates under that name till 2020 when it metamorphosed to a Limited Liability Company with CAC in 2020 with a view to making it a legal entity and to give room for expansion, national and international collaborations to actualize its goals and objectives.</p>
                </div>
                <div className='about-text'>
                    <h2 className='about-text-header'>Our Vision</h2>
                    <p>To bridge the communication gaps among nations through professional language trainings, translation and other related services.</p>
                </div>
                <div className='about-text'>
                    <h2 className='about-text-header'>Our Mission</h2>
                    <ul className='mission-list'>
                        <li><CustomSpan>01</CustomSpan>
                        <p>
                        Fulfilling the yearnings of the teaming Muslims who are passionate about learning the language of their revealed book.
                        </p>
                         </li>
                        <li><CustomSpan>02</CustomSpan>
                        <p>
                        Encouraging learning of Arabic for diverse purposes.
                        </p>
                       </li>
                        <li><CustomSpan>03</CustomSpan>
                        <p>
                        Engaging the service of professionals and trained tutors to achieve its goals.
                        </p>
                        </li>
                        <li><CustomSpan>04</CustomSpan>
                        <p>
                        Taking advantage of modern technologies to break the barriers of space and time.
                        </p>
                        </li>
                        <li><CustomSpan>05</CustomSpan>
                        <p>
                        Making its services accessible to all and sundry via unlimited potentials available online.
                        </p>
                        </li>
                        <li><CustomSpan>06</CustomSpan>
                        <p>
                        Collaborating, adapting, and affiliating with institutions of higher learning both home and abroad to give its programs international touch.
                        </p>
                        </li>
                    </ul>
                </div>
            </div>
            <GetInTouch />
        </div>
    )
}

export default About;