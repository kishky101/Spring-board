import './button.styles.scss'

const ButtonTypes = {
    defaultWhite: 'white',
    register: 'register',
    defaultTrans: 'transparent'
}
const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button transition-style="in:square:center" className={`button-container ${ButtonTypes[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;