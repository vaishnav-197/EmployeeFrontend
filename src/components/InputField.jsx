



const   InputField = ({
    label,
    name,
    type,
    placeholder,
    handleChange,
    style,
    defaultValue,
    disabled
}) => {
    
    return(
        <div className={style}>
            <div>{label} </div>
            <input 
                defaultValue={defaultValue}
                type={ type }
                name={name}
                placeholder={placeholder} 
                onChange={handleChange}
                disabled={disabled}
            />
        </div>
    )
}




export default InputField