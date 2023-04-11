import {useQuery} from '@apollo/client'
import { getNotes } from './api/getNotes'
import {Note} from './api/types'


const App = () => {


  const { data, loading, error } = useQuery<Note>(getNotes)
  return (
    
      <div>{
        data?.notes.map(note => (
          <ul key={note.id}>
            <li>{note.title}</li>
            <li>{note.content}</li>
            <li>{note.createdAt}</li>
            <li>{note.updatedAt}</li>
          </ul>
        ))
        }</div>

    
  )
}

export default App