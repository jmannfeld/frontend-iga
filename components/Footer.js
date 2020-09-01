const Footer = () => (
  <div className="footer container-fluid">
    <div className="row d-flex justify-content-center">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Site Map
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Find Your Legislator
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Accessibility
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Agency Reports Portal
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="in.gov">
            in.gov
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Find an Agency
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Find a Person
          </a>
        </li>
      </ul>
    </div>

    <style jsx>{`
      .footer {
        background-color: rgb(213, 215, 222);
      }

      .nav-link {
        font-size: 0.8rem;
        color: rgb(5, 24, 54);
      }

      .nav-link:hover {
        background-color: rgb(203, 206, 214);
      }
    `}</style>
  </div>
);

export default Footer;
