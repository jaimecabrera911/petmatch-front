import BarraNavegacionLogin from '../components/BarraNavegacionLogin'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
        <>
            <BarraNavegacionLogin />
            <Outlet />
        </>
    )
}

export default UserLayout