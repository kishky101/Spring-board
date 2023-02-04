import RoutesHero from '../../components/routes-hero/routes-hero.component';
import GetInTouch from '../../components/get-in-touch/get-in-touch.component';
import CustomSpan from '../../components/custom-span/custom-span.component';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './programs.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Programs = () => {
    return (
        <div className='program-container'>
            <RoutesHero />
            <div className='program-text-container'>
                <div className='program-text'>
                    <h2 className='program-text-header'>Programmes</h2>
                    <p>Currently, Springboard Language Academy runs its Arabic and Qur’an virtual courses to different categories of students. There are three stages in the academy namely: Basic, Intermediate and Advanced studies. </p>
                </div>
                <div className='program-description'>
                    <ul>
                        <li>
                        <h4><CustomSpan>01</CustomSpan>Basic Stage</h4>
                        <p>The Basic level is broken into three modules taken across 3 terms of 13 weeks each and 2 hours per week. Each terms targets 26 hours per term. It aims at teaching a beginner the rudiments of the Arabic language to enable him acquire skills of reading vocalized Arabic texts, especially the Noble Qur’an. Thus, the first module focuses on learning and becoming familiar with the Arabic consonants and vowels, in reading, writing and dictation. In the second module to be taken in the second term, the student is expected to be able to read any vocalized Arabic text especially the Noble Qur’an. Short Prophetic Narrations are introduced as well as other Arabic texts. Rudiments of basic Arabic skills are introduced mainly to strengthen the reading and writing skills of the students in the 3rd module. </p>
                        </li>
                        <li>
                        <h4><CustomSpan>02</CustomSpan>Intermediate stage</h4>
                        <p>The Intermediate stage has 3 modules to be taken in another 3 terms of 13 weeks each and 6 hours per week during the weekdays and 4 hours per week on weekends. Each term has 72 hours of weekday and 52 hours of weekend. The main aim of this level is to promote the previously acquired language skills of writing and reading at the basic level while the other two skills are introduced; namely: listening, and speaking. To enrich the vocabularies, subjects such as: Fiqh, Sirah, Arabiyyah, Hadith are introduced. Most course materials are written in standard Arabic language. Tajweed is also taken at this stage to fine-tune the Qur’anic recitation skill of the student.</p>
                        </li>
                        <li>
                        <h4><CustomSpan>03</CustomSpan>Advanced Stage</h4>
                        <p>The Advanced stage has 3 modules to be taken in another 3 terms of 13 weeks each and 5 hours per week of weekdays and 4 hours per week of weekends. Each term contains 65 hours of rigorous lessons for weekdays and 52 hours of weekends. At this stage, students are introduced to morphology and syntax rules in the course of their Arabiyyah classes. They are prompted to strengthen all the four skills of learning a language namely: Reading, speaking, listening and writing. Other subjects to complement those skills are taught with Arabic materials. These include: Tafseer, Hadith, Fiqh, Reader, Inheritance and Tarikh.</p>
                        </li>
                    </ul>
                </div>
                <div className='platforms'>
                    <h3>Platform</h3>
                    <div className='platform-card-container'>
                        <div className='platform-card'>
                            <div className='platform-image'>
                                <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/zoom-icon.png' />
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/934px-Google_Meet_icon_%282020%29.svg.png' />
                            </div>
                            <h4>Zoom & Google Meet</h4>
                            <hr />
                            <p>
                                We currently run our classes on licensed zoom application and Google meet.
                            </p>
                        </div>
                        <div className='platform-card'>
                            <div className='platform-image'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png' />
                            </div>
                            <h4>WhatsApp</h4>
                            <hr />
                            <p> We support the zoom class with WhatsApp groups for sharing of materials and information. We also use the group platform for assignments and other related joint activities. At the end of each term, students are subjected to comprehensive assessments.</p>
                        </div>
                    </div>
                    
                </div>
                <div className='days-of-operation'>
                    <h3>Days of Operation</h3>
                    <div className='days-box-container'>
                        <div className='days-box'>
                            <h6>WEEKDAYS</h6>
                            <hr />
                            <p>
                                <span>Mondays <FontAwesomeIcon icon={faCheckCircle} className='icon' /> </span>
                                <span>Tuesdays <FontAwesomeIcon icon={faCheckCircle} className='icon' /> </span>
                                <span>Wednesdays <FontAwesomeIcon icon={faCheckCircle} className='icon' /> </span>
                                <span>Thursdays (Basic Only) <FontAwesomeIcon icon={faCheckCircle} className='icon' /> </span>
                                <span>Fridays (Basic Only) <FontAwesomeIcon icon={faCheckCircle} className='icon' /> </span>
                            </p>
                        </div>
                        <div className='days-box'>
                            <h6>WEEKENDS</h6>
                            <hr />
                            <p>
                                <span>Saturdays <FontAwesomeIcon icon={faCheckCircle} className='icon' /> </span>
                                <span>Sundays <FontAwesomeIcon icon={faCheckCircle} className='icon' /> </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <GetInTouch />
        </div>
    )
}

export default Programs;