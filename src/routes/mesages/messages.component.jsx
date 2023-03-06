import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/user/user.context';
import { ContactContext } from '../../context/contact/contact.context';
import MessageCard from '../../components/mesage-card/message-card.component';
import AdminNav from '../../components/admin-nav/admin-nav.component';
import './messages.styles.scss'

const Message = () => {
    const navigate = useNavigate();
    const MessageContext = useContext(ContactContext);
    const {contacts} = MessageContext
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
                        <th>MESSAGE</th>
                    </tr>
                </thead>
                {   contacts.length?
                    <tbody>
                        {    
                            contacts.map(list => <MessageCard key={list.createdAt.seconds} userObj={list} seconds={list.createdAt.seconds} />)  
                        }
                    </tbody>  
                    : <span style={{textAlign: 'center', }}>You have No messages yet</span>
                }

            </table>
        </div>
    )
}

export default Message;
