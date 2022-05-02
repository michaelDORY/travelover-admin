import {useFirebaseApp, useUser} from 'reactfire';
import {Routes, Route, Navigate} from 'react-router-dom';
import AuthLayout from './pages/AuthLayout';
import Dashboard from './pages/Dashboard';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useEffect, useState} from 'react';
// import {getFirestore} from "firebase/firestore";
// import app from './common/firebaseApp'

function App() {

    // const firestoreInstance = getFirestore(app);
    // const auth = getAuth(app);

    const app = useFirebaseApp();

    const auth = getAuth();

    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setIsLogged(!!user)
        });
    }, [auth])

    // const {data: user, firstValuePromise} = useUser();
    //
    // const [isUserLoaded, setIsUserLoaded] = useState(false);
    //
    // useEffect(() => {
    //     firstValuePromise.then(() => setIsUserLoaded(true));
    // }, [firstValuePromise])
    //
    // if (!isUserLoaded) {
    //     return null;
    // }
    //
    // // const isLogged = !!user;

    return (
        <>
            {
                isLogged ? (
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
            }
        </>
    );
}

export default App;
