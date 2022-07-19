
const Button = ( {
        label , 
        HandleClick,
        style
        } ) => {
    return(
        <button className={style} onClick={HandleClick} type="submit"> {label} </button>
    )
}



export default Button