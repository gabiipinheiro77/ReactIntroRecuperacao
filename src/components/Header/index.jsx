import { Link } from 'react-router-dom'
import './style.css'
 
function Header() {
    return (
        <>
        <h2>React</h2>
         <Link to='/'>
                    <button>Home</button>
                </Link>
        </>
    )
}
export default Header