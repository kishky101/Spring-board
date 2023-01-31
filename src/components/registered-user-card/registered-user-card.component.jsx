import './registered-user-card.styles.scss'

const RegisterUserCard = ({userObj, seconds}) => {

    const {
        fullName, 
        email, 
        number, 
        background, 
        internet, 
        days, 
        agreement, 
        sponsor,
        
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
            <td>{background}</td>
            <td>{days}</td>
            <td>{internet}</td>
            <td>{sponsor}</td>
            <td>{agreement}</td>
        </tr>
          
    )
}

export default RegisterUserCard;