import './message-card.styles.scss'

const MessageCard = ({userObj, seconds}) => {

    const {
        fullName, 
        email, 
        number, 
        message
        
    }  = userObj;

 
    const date = new Date(seconds * 1000)
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const fullDate = `${day}-${month}-${year}, ${hour}:${minute}:${second}`
    return (
        
        <tr>
            <td>{fullDate}</td>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{number}</td>
            <td>{message}</td>
        </tr>
          
    )
}

export default MessageCard;