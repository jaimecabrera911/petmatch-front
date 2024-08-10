import BarraNavegacionLogin from '../components/BarraNavegacionLogin'
import { Outlet } from 'react-router-dom'

const LoginLayout = () => {
    return (
        <>
            <BarraNavegacionLogin />
            <Outlet />
        </>
    )
}

export default LoginLayout