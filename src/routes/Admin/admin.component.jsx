import Button from '../../components/button/button.component';
import { Outlet, useNavigate } from 'react-router-dom';

import './admin.styles.scss';

const Admin = () => {

    const navigate = useNavigate();

    return (
        <div className='admin-container'>
            <div className='admin-button'>
                <Button onClick={() => navigate('/admin/register-list')}>Register</Button>
                <Button onClick={() => navigate('/admin/messages')}>Messages</Button>
            </div>

            <Outlet />

        </div>
    )
}

export default Admin;