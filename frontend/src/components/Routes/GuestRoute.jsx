import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const GuestRoute = ({children}) => {
    const {isAuth} = useSelector((state) => state.auth);

    return !isAuth
        ? children
        : <Navigate to="/rooms"/>;
}

export default GuestRoute;
