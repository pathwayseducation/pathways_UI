import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse,
    Badge
} from "shards-react";

export default class PathwaysNavbar extends React.Component{
    constructor(props) {
        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            dropdownOpen: false,
            collapseOpen: false
        };
    }

    toggleDropdown() {
        this.setState({
            ...this.state,
            ...{
                dropdownOpen: !this.state.dropdownOpen
            }
        });
    }

    toggleNavbar() {
        this.setState({
            ...this.state,
            ...{
                collapseOpen: !this.state.collapseOpen
            }
        });
    }

    render() {
        return (
            <>
            <Navbar type="dark" theme="" expand="md" className="comfortaa orangebg sticky-top" >
                <NavbarBrand href="#" className="comfortaa brand">Pathways <Badge pill className="badge">BETA</Badge></NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar}/>

                <Collapse open={this.state.collapseOpen} navbar>
                    <Nav navbar className="">
                        <NavItem className="pageLink">
                            <NavLink href="#">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem className="pageLink">
                            <NavLink href="#">
                                Opportunities
                            </NavLink>
                        </NavItem>
                        <NavItem className="pageLink">
                            <NavLink href="#">
                                Forums
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar className="ml-auto">
                        <NavItem className="pageLink">
                            <NavLink active href="#">
                                <AccountCircleIcon />  Profile
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <Nav navbar className="searchBar">
                        <NavItem>
                            <InputGroup size="sm" seamless>
                                <InputGroupAddon type="prepend">
                                    <InputGroupText>
                                        <SearchIcon color="disabled" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <FormInput className="border-0" placeholder="Search Pathways..."/>
                            </InputGroup>
                        </NavItem>
                    </Nav>
                    <Nav navbar className="border-left">
                        <Dropdown
                            open={this.state.dropdownOpen}
                            toggle={this.toggleDropdown}
                        >
                            <DropdownToggle nav caret>
                                <SettingsIcon/>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Account Settings</DropdownItem>
                                <DropdownItem>Help Center</DropdownItem>
                                <DropdownItem>Sign Out</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Nav>
                </Collapse>
            </Navbar>
                <style jsx global>{`
                    @import url('https://fonts.googleapis.com/css?family=Comfortaa&display=swap');
                    .comfortaa{
                        font-weight:600;
                        padding: 5px 10px 5px 10px;
                    }
                    .brand{
                        font-size:170%;
                    }
                    .badge{
                        font-size:40%;
                    }    
                    .searchBar{
                        padding: 0px 10px 0px 10px;
                    }
                    .pageLink{
                        font-size:110%;
                    }
                `}</style>
            </>
        );
    }
}