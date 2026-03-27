const TextInput = ({name, label, formDataType, handleChange, type}) => {
    return ( 
        <div className="mb-4">
                <label htmlFor={name} className="block font-semibold">
                    {label}
                </label>
                {
                    type === 'input' &&
                    <input name={name} type="text" 
                className="w-full p-2 border rounded-lg" 
                value={formDataType}
                onChange={handleChange}
                />
                }
                {
                    type === 'textarea' &&
                    <textarea name={name} type="text" 
                className="w-full p-2 border rounded-lg" 
                value={formDataType}
                onChange={handleChange}
                ></textarea>
                }
                
            </div>
     );
}
 
export default TextInput;