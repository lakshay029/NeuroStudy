import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Auth/Login'
import Dashboardpage from './pages/Dashboard/Dashboardpage'
import NotFoundPage from './pages/NotFoundPage'
import RegisterPage from './pages/Auth/Registerpage'

const App=()=> {
const isAuthentication=false;
const Loading=false;


  if(Loading){
    return(
      <div className="flex items-center justify-center h-screen">
        <p>Laoding...</p>
      </div>
    )
  }


  return (
    <Router>
      <Routes>
        {/* Root route decides where to go */}
        <Route
          path="/"
          element={
            isAuthentication ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route path="/dashboard" element={<Dashboardpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />

          {/* protected Routes */}
          <Route element={<ProtectedRoute />} />
          <Route path="/dashbaord" element={<Dashboardpage />} />
          <Route path="documents" element={<Documentlistpage />} />
          <Route path="/documents/:id" element={<Documentdetailpage />} />
          <Route path="/flascard" element={<Flashcardlistpage />} />
          <Route path="/document/:id/flashcard" element={<FlashCardpage />} />
          <Route path="/quizz/:quizId" element={<QuizTakePage />} />


        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}


export default App
