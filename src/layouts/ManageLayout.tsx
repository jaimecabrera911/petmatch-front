import BarraNavegacionGestion from '../components/BarraNavegacionGestion'
import { Outlet } from 'react-router-dom'

interface Props {
    role: string,
}

const ManageLayout = (props: Props) => {
    return (
        <>
            <BarraNavegacionGestion role={props.role} />
            <Outlet />
        </>
    )
}

export default ManageLayout