import './spinner.styles.scss'

const Spinner = () => {
    return(
        <div className='spinner-container'>
            <div className='spinner'>
                <h1>SpringBoard Language Academy</h1>
                <div className='loader'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Spinner;