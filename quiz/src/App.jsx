import { Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import AuthPage from './pages/AuthPage'
import QuizPage from './pages/QuizPage'
import QuestionPage from './pages/QuestionPage'
import UserPage from './pages/UserPage'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/quiz" element={<ProtectedRoute element={<QuizPage />} />} />
      <Route path="/question" element={<ProtectedRoute element={<QuestionPage />} />} />
      <Route path="/user" element={<ProtectedRoute element={<UserPage />} />} />
    </Routes>
  )
}

export default App
