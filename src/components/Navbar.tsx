import profileimg from '../assets/profile-user.png';
import searchimg from '../assets/search.png';
import '../css/components.css';
export default function Navbar (){
    return (
        <>
        <nav className="nav-container">
            <h1><a href="/">Weather Ultimate</a></h1>
            <div className="nav-images-container">
            <a href="">
            <img src={profileimg} alt="profile" className='nav-images'/>
            </a>
            <a href="">
            <img src={searchimg} alt="search" className='nav-images'/>
            </a>
            </div>
        </nav>
        </>
    );
}