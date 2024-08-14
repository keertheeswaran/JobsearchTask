import logo from "../assets/img/logo.png";
const Header = () => {
  return (
    <>
      <div className="container-fluid  pt-2 pb-2  header ">
        <div className="row">
          <div className="col-sm-3">
            <img src={logo} alt="logo" className="logo"></img>
          </div>
          <div className="col-sm-7">
            {/* <ul className="d-flex list-unstyled justify-content-center">
              <li className="ps-3 pe-3">Home</li>
              <li className="ps-3 pe-3">About</li>
              <li className="ps-3 pe-3">Contact</li>
            </ul> */}
          </div>
          <div className="col-sm-2 text-end pe-5 pt-2 pb-2">
            <label>CompanyName</label>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
