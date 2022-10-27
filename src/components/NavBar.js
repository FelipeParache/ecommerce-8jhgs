import Logo from "../images/logo-globalsports.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <header>
        <nav className="navbar bg-primary">
          <div className="container-fluid">
            <img alt="Global Sports" src={Logo} width="100px" />
            <ul>
              <a href="../public/index.html"><li>INDUMENTARIA</li></a>
              <a href="../public/index.html"><li>PELOTAS</li></a>
              <a href="../public/index.html"><li>PROOFCARE</li></a>
              <a href="../public/index.html"><li>ACCESORIOS</li></a>
            </ul>
            <CartWidget />
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;