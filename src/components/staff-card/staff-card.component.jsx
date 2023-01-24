import './staff-card.styles.scss'



const StaffCard = ({staffObj}) => {
    const {name, imageUrl, description} = staffObj;

    return (
        <div className='staff-card-container'>
            <div className='staff-card-img'>
                <img src={imageUrl} alt='staff Image' />
            </div>
            <div className='staff-card'>
                <div>
                    <h3>{name}</h3>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default StaffCard;