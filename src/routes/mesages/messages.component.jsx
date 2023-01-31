import { useContext } from 'react'
import { ContactContext } from '../../context/contact/contact.context';
import MessageCard from '../../components/mesage-card/message-card.component';

import './messages.styles.scss'

const Message = () => {

    const MessageContext = useContext(ContactContext);
    const {contacts} = MessageContext

    return (
        <div className='registeration-list-container'>
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