const Navbar = () => {
    return (
        <nav className="navbar">
          <div className="navbar-logo">
            <h1>MyApp</h1>
          </div>
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="navbar-toggle">
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
          </div>
        </nav>
      );
    
}
 
export default Navbar;