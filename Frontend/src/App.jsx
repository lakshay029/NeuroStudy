import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Pages/Auth/LoginPage';
import RegisterPage from './Pages/Auth/RegisterPage';
import PageNotFound from './Pages/PageNotFound';
import DashBoardPage from './Pages/Dashboard/DashboardPage';
import DocumentDetailPage from './Pages/Document/DocumentDetailPage';
import DocumentListPage from './Pages/Document/DocumentListPage';
import FlashCardListPage from './Pages/FlashCard/FlashCardListPage';
import FlashCardPage from './Pages/FlashCard/FlashCardPage';
import QuizResultPage from './Pages/Quizzes/QuizResultPage';
import QuizTakePage from './Pages/Quizzes/QuizTakePage';
import ProfilePage from './Pages/Profile/ProfilePage';
import ProtectedRoutes from './component/auth/ProtectedRoutes';

function App() {
  const isAuthentication = false;
  const isloading = false;

  if (isloading) {
    return (
      <div>
        <p>loading....</p>
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthentication
            ? <Navigate to="/dashboard" replace />
            : <Navigate to="/login" replace />
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* protected routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/documents" element={<DocumentListPage />} />
        <Route path="/document/:id" element={<DocumentDetailPage />} />
        <Route path="/FlashCard" element={<FlashCardListPage />} />
        <Route path="/document/:id/flashcard" element={<FlashCardPage />} />
        <Route path="/quizzes/:quizid" element={<QuizTakePage />} />
        <Route path="/quizzes/:quizid/results" element={<QuizResultPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
