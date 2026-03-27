const Note = ({note, deleteNote}) => {
    return ( 
        <div 
                key={note.id} 
                className={'p-4 bg-white rounded-lg shadow-md border-l-4'}
                style={{
                    borderLeftColor: note.priority == 'High'? 'red': note.priority == 'Medium' ? 'orange': 'green'
                }}
                >
                    <h3 className="text-lg font-bold">{note.title}</h3>
                    <p className="text-sm text-gray-600">
                        <strong>Category: {note.category}</strong>
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Priority: {note.priority}</strong>
                    </p>
                    <p className="mt-2">{note.description}</p>

                    <button onClick={() => deleteNote(note.id)} className="mt-3 p-2 cursor-pointer bg-red-700 text-white hover:bg-red-800 transition-all rounded-lg relative left-90">Delete</button>
                </div>
     );
}
 
export default Note;