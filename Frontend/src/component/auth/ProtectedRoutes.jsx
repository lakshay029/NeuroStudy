
import { Outlet ,Navigate} from 'react-router-dom';
import AppLayout from '../layout/AppLayout';

const ProtectedRoutes = () => {

    const isAuthentication=true;
    const isloading=false;

    if(isloading){
        return <div>Loading....</div>
    }




  return isAuthentication?(
    <AppLayout>
        <Outlet />
    </AppLayout>
  ):(
    <Navigate to="/login" replace />
  )
}

export default ProtectedRoutes