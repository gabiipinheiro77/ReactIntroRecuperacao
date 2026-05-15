import { Link } from 'react-router-dom'
import './style.css'
 
function Header() {
    return (
        <>
        <h2>React</h2>
         <Link to='/'>
                    <button>Home</button>
                </Link>
                <Link to='/Operacoes'>
                    <button>Operações</button>
                    </Link>
                    <Link to='/LocaisDMundo'>
                    <button>Locais do Mundo</button>
                </Link>
        </>
    )
}
export default Header