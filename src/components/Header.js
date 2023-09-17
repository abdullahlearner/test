import logo from "../images/logo.png";

function Header() {
  return (
    <div>
      <header id="header" className="wpo-site-header wpo-header-style-3">
        <nav className="navigation navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="open-btn">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="index.html">
                <img src={logo} alt="My Academy Logo" />
              </a>
            </div>
            <div
              id="navbar"
              className="navbar-collapse collapse navbar-right navigation-holder"
            >
              <button className="close-navbar">
                <i className="ti-close"></i>
              </button>
              <ul className="nav navbar-nav">
                <li className="menu-item-has-children">
                  <a href="#">Home</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="index.html">Home style 1</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home style 2</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home style 3</a>
                    </li>
                    <li>
                      <a href="index-4.html">Home style 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Service</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="service.html">Service</a>
                    </li>
                    <li>
                      <a href="service-single.html">Service Single</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="donate.html">Donate</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Event</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="event.html">Event</a>
                    </li>
                    <li>
                      <a href="event-single.html">Event Single</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Blog</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog.html">Blog right sidebar</a>
                    </li>
                    <li>
                      <a href="blog-left.html">Blog left sidebar</a>
                    </li>
                    <li>
                      <a href="blog-fulwidth.html">Blog fullwidth</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Blog details</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-single.html">
                            Blog details right sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-single-left.html">
                            Blog details left sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-single-fluid.html">
                            Blog details fullwidth
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="cart-search-contact">
              <div className="btns">
                <a href="contact.html" className="theme-btn">
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Header;
