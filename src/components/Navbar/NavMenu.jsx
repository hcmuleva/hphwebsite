import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assests/kiwico-logo-horizontal.svg";
import Dropdown from "react-bootstrap/Dropdown";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function NavMenu() {
  return (
    <Navbar bg="white" expand="lg" className="shadow p-3 mb-5 bg-white rounded">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown
              title="Subscription lines"
              id="navbarScrollingDropdown"
              className="mx-3 text-reset"
            >
            <NavDropdown.Item className="w-75">  <div className="grid grid-cols-3 gap-3 px-3">
                <div>
                  <p>dfdsfds</p>
                </div>
                <div>
                  <p>dfdsfds</p>
                </div>
                <div>
                  <p>dfdsfds</p>
                </div>
                <div>
                  <p>dfdsfds</p>
                </div>
                <div>
                  <p>dfdsfds</p>
                </div>
                <div>
                  <p>dfdsfds</p>
                </div>
              </div></NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link href="#action1" className="text-reset">
              Gifting
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search kiwi"
              className="w-auto me-4 rounded-pill h-25"
              aria-label="Search"
            />
          </Form>
          <NavDropdown
            title="USD"
            id="navbarScrollingDropdown"
            className="mx-3 fw-semibold fs-6"
          >
            <Dropdown className="">
              <Dropdown.Toggle variant="" id="dropdown-basic" className="border  flex mx-2 my-3 p-0" style={{width:175 }}>
                <p className="p-0 m-0" style={{fontSize:12}}>Dropdown country/region</p>
                <h4 className="p-0 m-0" style={{fontSize:15}}>Select one</h4>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Select One</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Australia</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Austria</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Belgium</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Bulgaria</Dropdown.Item>
                <Dropdown.Item href="#/action-6">Canada</Dropdown.Item>
                <Dropdown.Item href="#/action-7">Croatia</Dropdown.Item>
                <Dropdown.Item href="#/action-8">Cyprus</Dropdown.Item>
                <Dropdown.Item href="#/action-8">Cyprus</Dropdown.Item>
                <Dropdown.Item href="#/action-8">Cyprus</Dropdown.Item>
                <Dropdown.Item href="#/action-8">Cyprus</Dropdown.Item>
                <Dropdown.Item href="#/action-8">Cyprus</Dropdown.Item>
                <Dropdown.Item href="#/action-8">Cyprus</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="">
              <Dropdown.Toggle variant="" id="dropdown-basic" className="border  flex mx-2 p-0" style={{width:175 }}>
                <p className="p-0 m-0" style={{fontSize:12}}>Currency</p>
                <h4 className="p-0 m-0" style={{fontSize:15}}>USD($)</h4>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Select One</Dropdown.Item>
                <Dropdown.Item href="#/action-2">USD</Dropdown.Item>
                <Dropdown.Item href="#/action-3">CAD</Dropdown.Item>
                <Dropdown.Item href="#/action-3">AUD</Dropdown.Item>
                <Dropdown.Item href="#/action-3">NZD</Dropdown.Item>
                <Dropdown.Item href="#/action-3">GBP</Dropdown.Item>
                <Dropdown.Item href="#/action-3">EUR</Dropdown.Item>
                <Dropdown.Item href="#/action-3">HKD</Dropdown.Item>
                <Dropdown.Item href="#/action-3">SGD</Dropdown.Item>
                <Dropdown.Item href="#/action-3">YEN</Dropdown.Item>
                <Dropdown.Item href="#/action-3">WON</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </NavDropdown>
          <Button variant="" className="mx-3 fw-semibold fs-6">
            <ion-icon name="person"></ion-icon>Sign in
          </Button>
          <div className="pointer">
            <ShoppingCartOutlinedIcon style={{ fontSize: "200%"}}/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
