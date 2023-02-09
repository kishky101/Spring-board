import { useContext } from "react"
import { StaffContext } from "../../context/staff/staff.context"
import RoutesHero from "../../components/routes-hero/routes-hero.component"
import GetInTouch from "../../components/get-in-touch/get-in-touch.component"
import StaffCard from "../../components/staff-card/staff-card.component"
import ProgressBar from "../../components/progress-bar/progress-bar.component"
import { motion } from "framer-motion"
import { fadeIn } from "../../utils/framer-motion/framer"
import './staff.styles.scss'

const Staff = () => {

    const staffs = useContext(StaffContext);
    const {staff} = staffs;
    

    return (
        <div className="staff">
            <ProgressBar />
            <RoutesHero />
            <motion.div
            initial='hidden'
            whileInView='show'
            variants={fadeIn('up', 0)}
            viewport={{once: true}}
            className="staff-intro-container">
                <div className="staff-intro">
                    <h2>our faculty Members</h2>
                    <p>We have the best faculty members in the world. Meet our experienced and qualified faculty members.</p>
                </div>
                <div>
                    {staff.map(staff => <StaffCard staffObj={staff} key={staff.name} />)}
                </div>
            </motion.div>

            <GetInTouch />
        </div>
    )
}

export default Staff