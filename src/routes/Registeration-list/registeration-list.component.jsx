import { useContext } from 'react'
import { RegisterationContext } from '../../context/registeration/registeration.context'
import RegisterUserCard from '../../components/registered-user-card/registered-user-card.component'

import './registeration-list.styles.scss'

const RegisterationList = () => {

    const registerContext = useContext(RegisterationContext);
    const {register} = registerContext

    return (
        <div className='registeration-list-container'>
            <table>
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>FULLNAME</th>
                        <th>EMAIL ADDRESS</th>
                        <th>PHONE NUMBER</th>
                        <th>ARABIC BACKGROUND</th>
                        <th>DAYS</th>
                        <th>INTERNET</th>
                        <th>SPONSOR</th>
                        <th>AGREEMENT</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        register.map(list => <RegisterUserCard key={list.createdAt.seconds} userObj={list} seconds={list.createdAt.seconds} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default RegisterationList;

