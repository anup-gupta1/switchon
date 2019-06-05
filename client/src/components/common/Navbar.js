import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './common.css';
import { Link,withRouter } from 'react-router-dom';
import {logout} from '../../actions/authActions'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNavSidebar: false,
            showCollapseIcon: false
        }
        this.toggle = this.toggle.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }


    componentWillMount() {
        const viewPortWidth = window.innerWidth;
        console.log("width : ", viewPortWidth);
       
        if (viewPortWidth < 600) {
            this.setState({
                showCollapseIcon: true
            })
        }
        window.addEventListener('resize', () => {
            let viewPortWidth = window.innerWidth;
            if (viewPortWidth < 600) {
                this.setState({
                    showCollapseIcon: true,
                })
            } else {
                this.setState({
                    showCollapseIcon: false,
                    showNavSidebar: false
                })
            }
        });
    }


    handleRegister(){
        this.props.history.push('/register');
        this.setState({showNavSidebar:false})

    }


    handleLogout(){
        this.props.logout();
        this.setState({showNavSidebar:false})
        this.props.history.push('/login');
    }

    handleLogin(){
        this.props.history.push('/login');
    }




    toggle() {
        this.setState({
            showNavSidebar: !this.state.showNavSidebar
        });
    }

    onItemClick() {
        this.setState({
            showNavSidebar: false
        })
    }

    render() {
        const { auth, profile } = this.props;
        let profilePath = profile ? '/profile/' + profile.handle : ''
        return (
            <div>
                <div className="nav">
                    <div className="d-flex justify-content-between align-items-center nav-top">
                        <div className="nav-brand"><h3>LetsGo</h3></div>
                        {this.state.showCollapseIcon ?
                            <div className="collapse-navbar common-pointer" onClick={this.toggle}>
                                <div className="collapsible-nav-icon"></div>
                                <div className="collapsible-nav-icon"></div>
                                <div className="collapsible-nav-icon"></div>
                            </div> : 
                            <div className="d-flex nav_item_right">
                                <div className="nav_item"> <Link to='/create-request'>Create Request</Link></div>
                                <div className="nav_item"> <Link to='/pending'>Pending</Link></div>
                                <div className="nav_item"> <Link to="/approved">Approved</Link></div>
                                <div className="nav_item"> <Link to="/incoming-request">Incoming Request</Link></div>
                            </div>
                        }
                    </div>
                </div>
                {this.state.showNavSidebar &&
                    <div className="d-flex justify-content-end nav-navbar">
                        <div className="navbar-container">
                            {auth.isAuthenticated ?
                                <ul className="nav-sidebar-items">
                                <li className="nav-sidebar-item common-pointer">
                                        
                                    </li>
                                    <li className="nav-sidebar-item common-pointer" onClick={this.onItemClick}>
                                        {
                                             <Link to='/pending'>Pending</Link>
                                        }
                                    </li>
                                    <li className="nav-sidebar-item common-pointer" onClick={this.onItemClick}>
                                        <Link to="/approved">Approved</Link>
                                    </li>
                                    <li className="nav-sidebar-item common-pointer" onClick={this.onItemClick}>
                                        <Link to="/incoming-request">Incoming Request</Link>
                                    </li>
                                    <li className="nav-sidebar-item common-pointer" onClick={this.onItemClick}>
                                        notif
                                    </li>
                                    
                                    <hr classname="nav-sidebar-item-divider common-pointer" />
                                    <li className="nav-sidebar-item common-pointer" onClick={this.handleLogout}>Logout</li>
                                </ul>
                                : <ul className="nav-sidebar-items common-pointer">
                                    <li className="nav-sidebar-item common-pointer" onClick={this.handleRegister}>Register</li>
                                    <li className="nav-sidebar-item common-pointer" onClick={this.handleLogin}>Login</li>
                                </ul>
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
}

Navbar.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
});


export default withRouter(connect(mapStateToProps, {logout})(Navbar));