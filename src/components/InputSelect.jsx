

const InputSelect = ({
        label,
        options,
        style,
        styleSelect,
        handleChange,
        defaultValue,
        disabled
        })=>{
        return(
            <div className={style}>
                <div>{label} </div>
                <select 
                    className={styleSelect}
                    name={label}  
                    onChange={handleChange} 
                    defaultValue={defaultValue}
                    disabled={disabled}
                >
                    <option value="">{ ` Choose ${label}`} </option>
                        {   
                            options.map((item)=>{
                                return(
                                    <option value={item.value}>{item.key} </option>
                                )
                            })
                        }
                </select> 

                </div>
        )
}




export default InputSelect