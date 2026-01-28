import { Link } from 'react-router-dom'
import '../styles/home.css'
import {motion} from "framer-motion"

function Home(){
    return(
        <div className="home page-layout">
            <div className="left">
                <span className='banner'>svg & icons made easier</span>
                <span className='title'>
                    <h1 className='accent'>100+ Icons </h1>
                    <h1>With Endless Customization Waiting For You.</h1>
                </span>
                <div className='links'>
                    <Link to='/icons' className='large-button icons'>
                        <h2>View Icons</h2>
                        <div className='circle' />
                    </Link>
                    <Link to='/docs' className='large-button docs'>
                        <h2>Review Documentation</h2>
                    </Link>
                </div>
            </div>
            <motion.div className="right"
                initial={{ x: '50vw' }}
                animate={{ x: 0, transition: { duration: 1, delay: 0.75, ease: 'easeOut' }}}
                exit={{x: '75vw', transition: { duration: 0.5, ease: 'easeOut' }}}
            >
                <div className='container'>
                    {/**add design comp here */}
                </div>
                <div className='bottom'>
                    <p>more from this developer</p>
                    <div className='break'/>
                    <span>
                        <h3>
                            Upgrade your UI with&nbsp;
                            <a 
                                href="https://donovanheynen.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                            >
                            ReactUIbyHeynendo</a>
                        </h3>
                    </span>
                </div>
            </motion.div>
        </div>
    )
}

export default Home