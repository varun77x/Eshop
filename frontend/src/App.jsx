import { useState, useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'
import Loading from './components/Loading'

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Define the routes where Navbar and Footer should not appear
  const noHeaderFooterRoutes = ['/login', '/register'];

  const shouldShowHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <AuthProvider>
        {shouldShowHeaderFooter && <Navbar />}
        <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
          <Outlet />
        </main>
        {shouldShowHeaderFooter && <Footer />}
      </AuthProvider>
    </>
  )
}

export default App
