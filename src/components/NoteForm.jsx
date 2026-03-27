import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";

const NoteForm = ({notes, setNotes}) => {
    const [formData, setFormData] = useState({
        title: '',
        category: '💻Work',
        priority: '🔴High',
        description: ''
    })

    const [isVisible, setIsVisible] = useState(false);

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: [e.target.value]
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //Validation
        if(!formData.title || !formData.description) return;

        const newNote = {
            id: Date.now(), 
            ...formData
        }
        setNotes([newNote, ...notes])

        setFormData({
            title: '',
            category: '💻Work',
            priority: '🔴High',
            description: ''
        })
    }
    
    const priorityOptions = [
        {
            id: 1,
            name: '🔴High',
            value: 'High'
        },
        {
            id: 2,
            name: '🟡Medium',
            value: 'Medium'
        },
        {
            id: 3,
            name: '🟢Low',
            value: 'Low'
        }
    ]

    const categoryOptions = [
        {
            id: 1,
            name: '💻Work',
            value: 'Work'
        },
        {
            id: 2,
            name: '🏠Personal',
            value: 'Personal'
        },
        {
            id: 3,
            name: '💡Ideas',
            value: 'Ideas'
        }
    ]
    
    return ( 
        <>
        {/* Toggle Button */}
        <button 
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
        onClick={() => setIsVisible(!isVisible)}
        >
            {isVisible ? 'Hide Form ❌' : 'Add New Note ➕'}
        </button>

        {
        isVisible &&
        <form className="mb-6" onSubmit={handleSubmit}>
            <TextInput 
                name="title"
                label="Title"
                formDataType={formData.title}
                handleChange={handleChange}
                type="input"
            />

            <SelectInput 
                name="priority"
                label="Priority"
                formDataType={formData.priority}
                handleChange={handleChange}
                options={priorityOptions}
            />

            <SelectInput 
                name="category"
                label="Category"
                formDataType={formData.category}
                handleChange={handleChange}
                options={categoryOptions}
            />

            <TextInput 
                name="description"
                label="Description"
                formDataType={formData.description}
                handleChange={handleChange}
                type="textarea"
            />
            
            <button 
            className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600 transition-all"
            >
                Add Note
                </button>
            
        </form>}
        </>
    );
}
 
export default NoteForm;