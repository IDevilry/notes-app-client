import { Routes, Route } from 'react-router-dom'
import { 
  Favorites,
  Home,
  NotFound,
  Note,
  Profile,
  SignUp
} from './pages'
import { Layout } from './components/Layout'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path='profile' element={<Profile />} />
        <Route path='profile/:id' element={<Profile />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='favorites/:id' element={<Favorites />} />
        <Route path='note' element={<Note/>} />
        <Route path='note/:id' element={<Note/>} />
        <Route path='reg' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App