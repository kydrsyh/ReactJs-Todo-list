import {Link} from 'react-router-dom'

const Footer = (props) => {
    return (
        <footer>
            <p>Copytight &copy; 2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
