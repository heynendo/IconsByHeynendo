import '../styles/header.css'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'

function Header(){

    const location = useLocation()
    const currentPage = window.location.pathname.slice(1)


    return(
        <header>
            <div className="left">
                <Link to='/' className={currentPage === '' ? 'current':''}>
                    <h2 className="accent">Icons</h2>
                </Link>
                <h3 className="italic">
                    by&nbsp;
                    <a 
                        href="https://donovanheynen.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                    >
                        Donovan Heynen  
                    </a>
                </h3>
            </div>
            <div className="right">
                <Link to='/icons' className={currentPage === 'icons' ? 'current':''}><h3>Icons</h3></Link>
                <Link to='/docs' className={currentPage === 'docs' ? 'current':''}><h3>Docs</h3></Link>
            </div>
        </header>
    )
}


export default Header