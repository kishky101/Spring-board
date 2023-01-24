import RoutesHero from '../../components/routes-hero/routes-hero.component';
import CustomSpan from '../../components/custom-span/custom-span.component';
import './programs.styles.scss'

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
            </div>
        </div>
    )
}

export default Programs;