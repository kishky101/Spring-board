import Button from '../../components/button/button.component';
import { Outlet, useNavigate } from 'react-router-dom';

import './admin.styles.scss';

const Admin = () => {

    const navigate = useNavigate();

    return (
        <div className='admin-container'>
            <Outlet />
        </div>
    )
}

export default Admin;