import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button.component';

import './auth.styles.scss';

const Auth = () => {

    const navigate = useNavigate();

    return (
        <div style={{margin: '15vh auto'}}>
            <Button onClick = {() => navigate('/admin/sign-in')}>Sign In As an Admin</Button>
        </div>
    )
}

export default Auth;