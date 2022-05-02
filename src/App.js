import {Routes, Route, Navigate} from 'react-router-dom';
import AuthLayout from './pages/AuthLayout';
import Dashboard from './pages/Dashboard';
import {auth} from './common/firebase';
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import LoadingPage from "./pages/LoadingPage";

function App() {

    const [loading, setLoading] = useState(true);
    const [isUserLogged, setIsUserLogged] = useState(false);

    useEffect(() => {
        setLoading(true)
    }, [])

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsUserLogged(true)
            setLoading(false)
        } else {
            setIsUserLogged(false)
            setLoading(false)
        }
    });

    return (
        <>
            {
                loading ? <LoadingPage/> :
                    (
                        isUserLogged ? (
                                <Routes>
                                    <Route path='/' element={<Dashboard/>}/>
                                    <Route path='/login' element={<Navigate replace to='/'/>}/>
                                </Routes>
                            )
                            : (
                                <Routes>
                                    <Route path='/login' element={<AuthLayout/>}/>
                                    <Route path='/*' element={<Navigate replace to='/login'/>}/>
                                </Routes>
                            )
                    )
            }
        </>
    );
}

export default App;
