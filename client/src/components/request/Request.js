import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {getPendingRequests,getApprovedRequests, getIncomingRequests} from '../../actions/requestActions';
import RequestItem from './RequestItem';
import './request.css';



class Request extends Component {
    constructor(props){
        super(props);
        this.state = {
            type:''
        }

        this._renderRequests = this._renderRequests.bind(this);
    }


    componentDidMount(){
        const {pathname} = this.props.location;
        const {user} = this.props.auth;
        console.log(user);
    
        const {pending,approved,incomingRequests,getPendingRequests,getApprovedRequests, getIncomingRequests} = this.props;
        if(pathname === '/pending'){
            this.setState({type:'pending'})
            if(pending.length === 0){
                getPendingRequests().then(res=>{
                    console.log(res);
                })
            }
        }else if(pathname === '/approved'){
            this.setState({type:'approved'})
            if(approved.length === 0){
                getApprovedRequests().then(res =>{
                    console.log(res);
                })
            }
        }else if(pathname === '/incoming-request'){
            this.setState({type:'incoming-request'})
            if(incomingRequests.length === 0){
                getIncomingRequests(user.department_id).then(res =>{
                    console.log(res);
                })
            }
        }
    }


    _renderRequests(){
        const {type} = this.state;
        const {pending,approved,incomingRequests} = this.props;
        let requests = []
        if(type === 'pending'){
            requests = pending
        }else if(type === 'approved'){
            requests = approved;
        }else if(type === 'incoming-request'){
            requests = incomingRequests
        }

        return requests.length > 0 ? (
            requests.map(request =>{ 
              return (
                <RequestItem key={request._id} type={type} request={request} />
              )
              })
          ) : (null)
    }





    render() {
        return (
            <div className="request-container">
                {this._renderRequests()}
            </div>
        )
    }
}





const mapStateToProps = state => ({
    auth: state.auth,
    departments:state.department.departments,
    pending:state.request.pending,
    approved:state.request.approved,
    incomingRequests:state.request.incomingRequests
});

export default withRouter(connect(mapStateToProps, {getPendingRequests,getApprovedRequests,getIncomingRequests })(Request));
