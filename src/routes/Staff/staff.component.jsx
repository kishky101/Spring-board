import RoutesHero from "../../components/routes-hero/routes-hero.component"
import StaffCard from "../../components/staff-card/staff-card.component"
import staffs from "../../staff"

import './staff.styles.scss'
const Staff = () => {
    return (
        <div className="staff">
            <RoutesHero />
            <div className="staff-intro-container">
                <div className="staff-intro">
                    <h2>our staffs</h2>
                    <p>We have the best members of staffs in the world. Meet our experienced and qualified staffs.</p>
                </div>
                <div>
                    {staffs.map(staff => <StaffCard staffObj={staff} key={staff.name} />)}
                </div>
            </div>

            
        </div>
    )
}

export default Staff