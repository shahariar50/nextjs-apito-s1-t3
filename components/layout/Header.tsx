import Link from "next/link";

const Header = () => {
  return (
    <header className="header-global" id="home">
      <nav id="navbar-header" className="navbar navbar-expand-lg">
        <div className="container">
          <Link
            className="navbar-brand navbar-brand-center d-flex align-items-center p-0 only-mobile"
            href="/"
          >
            <picture>
              <img src="img/logo.png" alt="" />
            </picture>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="lnr lnr-menu"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav d-flex justify-content-between">
              <li className="nav-item only-desktop">
                <a className="nav-link" id="side-nav-open" href="#">
                  <span className="lnr lnr-menu"></span>
                </a>
              </li>
              <div className="d-flex flex-lg-row flex-column">
                <li className="nav-item active">
                  <Link className="nav-link" href="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Special Dishes
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" href="/special-dishes">
                      Beef Steak Sauce
                    </Link>
                    <Link className="dropdown-item" href="/special-dishes">
                      Salmon Zucchini
                    </Link>
                  </div>
                </li>
              </div>
            </ul>

            <a
              className="navbar-brand navbar-brand-center d-flex align-items-center only-desktop"
              href="#"
            >
              <picture>
                <img src="/static/img/logo.png" alt="" />
              </picture>
            </a>
            <ul className="navbar-nav d-flex justify-content-between">
              <div className="d-flex flex-lg-row flex-column">
                <li className="nav-item active">
                  <Link className="nav-link" href="/menu">
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/team">
                    Team
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link className="nav-link" href="/reservation">
                    Reservation
                  </Link>
                </li>
              </div>
              <li className="nav-item">
                <a id="side-search-open" className="nav-link" href="#">
                  <span className="lnr lnr-magnifier"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
