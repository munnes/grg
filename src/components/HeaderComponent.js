
import React, { Component } from "react";

import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Dropdown, DropdownMenu, DropdownToggle, DropdownItem,
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardImgOverlay,
} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
//import { FadeTransform } from 'react-animation-components';
import Freezone from './FreeZoneMenu'
import { Link, NavLink } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            dropdownOpen: false,
            freeClr: 'flora'
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })

    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + "Password: " + this.password.value +
            "Remember" + this.remember.checked);
        event.preventDefault();

    }
    render() {

        return (
            <>
                <Navbar style={{ backgroundColor: '#0091cd' }} expand="md"  >
                    <div className="container" style={{ fontFamily: 'Open Sans' }}>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="me-auto" href="/">
                            <img src="images/logo.png" height="70" width="70" 
                                alt="FreeZone" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>

                                <NavItem>
                                    <Dropdown className='nav-link' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        <DropdownToggle
                                            tag="span"
                                            onClick={this.toggle}
                                            data-toggle="dropdown"
                                            aria-expanded={this.state.dropdownOpen}
                                            className='menu'
                                        >
                                            <span className="fa fa-list fa-lg " >Free Zones </span>
                                        </DropdownToggle>
                                        <DropdownMenu style={{ marginTop: '10vh' }}>
                                            <div className='container row ' style={{ width: '73vw', }} >
                                                <div className="col-6 col-md-3" >

                                                    <Freezone fname={"Dubai South"} />
                                                    <Freezone fname={"International Free Zone Authority"} />
                                                    <Freezone fname={"Dubai Multi Commodities Center"} />
                                                    <Freezone fname={"Meydan Free Zone"} />
                                                    <Freezone fname={"Jebel Ali Free Zone"} />
                                                    <Freezone fname={"Dubai Airport Free Zone"} />
                                                    <Freezone fname={"Abu Dhabi Airport Free Zone"} />
                                                    <Freezone fname={"Abu Dhabi Global Market"} />
                                                    <Freezone fname={"Dubai World Trade Centre"} />
                                                    <Freezone fname={"Dubai Silicon Oasis"} />


                                                </div>
                                                <div className="col-6 col-md-3 ">
                                                    <Freezone fname={"Dubai Commercity Free Zone"} />
                                                    <Freezone fname={"Dubai Virtual Commercial City"} />
                                                    <Freezone fname={"Dubai Internet City"} />
                                                    <Freezone fname={"Dubai Academic City"} />
                                                    <Freezone fname={"Dubai Biotech Research Park"} />
                                                    <Freezone fname={"Dubai Design District"} />
                                                    <Freezone fname={"Gold and Diamond Park"} />
                                                    <Freezone fname={"Dubai Healthcare City"} />
                                                    <Freezone fname={"Dubai Industrial City"} />
                                                    <Freezone fname={"Dubai Knowledge Village"} />

                                                </div>
                                                <div className="col-6 col-md-3">
                                                    <Freezone fname={"Dubai Media City"} />
                                                    <Freezone fname={"Dubai Outsource Zone"} />
                                                    <Freezone fname={"Dubai Studio City"} />
                                                    <Freezone fname={"Dubai Techno Park"} />
                                                    <Freezone fname={"Dubai Intl Financial Centre"} />
                                                    <Freezone fname={"Fujairah Creative City"} />
                                                    <Freezone fname={"Sharjah Publishing City"} />
                                                    <Freezone fname={"Sharjah Airport Intl Free Zone"} />
                                                    <Freezone fname={"Sharjah Media City"} />
                                                    <Freezone fname={"Sharjah Research, Technology, and Innovation Park"} />
                                                </div>
                                                <div className="col-6 col-md-3">
                                                    <Freezone fname={"Ras Al Khaimah Economic Zone"} />
                                                    <Freezone fname={"Umm Al Quwain Free Trade Zone"} />
                                                    <Freezone fname={"KIZAD"} />
                                                    <Freezone fname={"Twofour54"} />
                                                    <Freezone fname={"Intl Media Production Zone"} />
                                                    <Freezone fname={"Hamriyah Free Zone"} />
                                                    <Freezone fname={"Ajman Free Zone"} />
                                                    <Freezone fname={"Fujairah Free Zone"} />
                                                    <Freezone fname={"Dubai Integrated Economic Zones"} />

                                                </div>


                                            </div>
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus" >
                                        <span className="fa fa-info fa-lg"></span>About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/services">
                                        Our Services
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/services">
                                        Business Directory
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/services">
                                        Free Zones Offers
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/services">
                                        Our Promotions
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/services">
                                        Careers
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/services">
                                        Articles
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/services">
                                        Contact Us
                                    </NavLink>
                                </NavItem>


                            </Nav>

                        </Collapse>
                    </div>
                </Navbar>
                <div style={{ backgroundImage: ` url('images/unitedarabemirates.jpg')` }} className='article'>


                    <div className="container"  >
                        <div className="row row-header" >

                            <div className="col-12 col-md-6" style={{ color: 'white' }}>
                                <FadeTransform in
                                    transformProps={{
                                        exitTransform: 'scale(0.5) translateY(-50%)'
                                    }}>
                                    <h2 >UAE Free Zones</h2>
                                    <h6>We are with you in your journey to succeed in your <br />enterprise to grow and to flourish – to be a pioneer</h6>
                                </FadeTransform>
                            </div>

                            <div className="col-12 col-md-6">

                                <FadeTransform in
                                    transformProps={{
                                        exitTransform: 'scale(0.5) translateY(-50%)'
                                    }}>
                                    <Card style={{ width: '70%', float: 'right', marginTop: 10, marginBottom: 10 }}>
                                        <CardBody>
                                            <Form style={{ color: 'black' }}>
                                                <FormGroup>
                                                    <Label htmlFor="username">Name <span style={{ color: 'red' }}>*</span></Label>
                                                    <Input type="text" id="username" name="username"
                                                        innerRef={(input) => this.username = input} />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label htmlFor="email">Email <span style={{ color: 'red' }}>*</span></Label>
                                                    <Input type="email" id="email" name="email"
                                                        innerRef={(input) => this.password = input} />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label htmlFor="phone">Phone</Label>
                                                    <Input type="phone" id="phone" name="phone"
                                                        innerRef={(input) => this.password = input} />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label htmlFor="enquiry">Enquiry <span style={{ color: 'red' }}>*</span></Label>
                                                    <Input type="textarea" id="enquiry" name="enquiry"
                                                        innerRef={(input) => this.password = input} />
                                                </FormGroup>

                                                <Button type="submit" value="submit" style={{ backgroundColor: '#0091cd', marginTop: 10 }}>Submit Your Enquiry</Button>
                                            </Form>
                                        </CardBody>
                                    </Card>

                                </FadeTransform>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input} />
                                    Remember me
                                </label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}
export default Header