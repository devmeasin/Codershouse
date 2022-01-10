import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

const SemiProtectedRoute = ({children}) => {

    const {isAuth, user} = useSelector((state) => state.auth);

    return (
        !isAuth
            ? <Navigate to="/authenticate"/>
            : (
                isAuth && !user.activated
                    ? children
                    : <Navigate to="/rooms"/>
            )
    )
}

export default SemiProtectedRoute;
