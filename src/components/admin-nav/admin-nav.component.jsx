import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom'
import { SignOutUser } from '../../utils/firebase/firebase.utils';
import './admin-nav.styles.scss';

const AdminNav = () => {
    const navigate = useNavigate()

    const signOutHandler = () => {
        SignOutUser()
        return navigate('/admin')
    }
    return (
        <div>
            <div className='admin-button'>
            <Button onClick={() => navigate('/admin/register-list')}>Register</Button>
            <Button onClick={() => navigate('/admin/messages')}>Messages</Button>
            <Button onClick={signOutHandler}>Sign Out</Button>
            </div>
        </div>
    )
}

export default AdminNav;