const SelectInput = ({name, label, formDataType, handleChange, options}) => {
    return ( 
        <div className="mb-4">
                <label htmlFor={name} className="block font-semibold">
                    {label}
                </label>
                <select name={name} type="text" 
                className="w-full p-2 border rounded-lg" 
                value={formDataType}
                onChange={handleChange}
                >
                    {
                        options.map(option =>(
                            <option key={option.id} value={option.value}>{option.name}</option>
                        ))
                    }
                </select>
            </div>
     );
}
 
export default SelectInput;