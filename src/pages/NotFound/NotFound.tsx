import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound: React.FC = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', {replace: true})
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  })
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='text-[32px] text-red-400 '>404 Page Not Found!</div>
      <p>Через 3 секунды вы будете перенаправлены на домашнюю страницу</p>
    </div>
  )
}

export default NotFound