import { useContext, useEffect } from 'react'
import {redirect, useNavigate} from 'react-router-dom'
import { RegisterationContext } from '../../context/registeration/registeration.context'
import { UserContext } from '../../context/user/user.context';
import RegisterUserCard from '../../components/registered-user-card/registered-user-card.component'
import AdminNav from '../../components/admin-nav/admin-nav.component';
import './registeration-list.styles.scss'

const RegisterationList = () => {
    const navigate = useNavigate();
    const registerContext = useContext(RegisterationContext);
    const {register} = registerContext;
    const userContext = useContext(UserContext);
    const {user} = userContext;

    useEffect(() => {
        if (user === null) {
            return navigate('/admin');
        }
    })
    

    return (
        <div className='registeration-list-container'>
            <AdminNav />
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

