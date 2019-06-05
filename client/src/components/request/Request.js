import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {getPendingRequests,getApprovedRequests, getApprovalRequests} from '../../actions/requestActions';
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
    
        const {pending,approved,getPendingRequests,getApprovedRequests, getApprovalRequests} = this.props;
        if(pathname === '/pending'){
            console.log("-------------pending----------",pending)
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
        }
    }


    _renderRequests(){
        const {type} = this.state;
        const {pending,approved} = this.props;
        let requests = []
        if(type === 'pending'){
            requests = pending
        }else if(type === 'approved'){
            requests = approved;
        }

        return requests.length > 0 ? (
            requests.map(request =>{ 
              return (
                <RequestItem key={request._id} request={request} />
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
    approved:state.request.approved


});

export default withRouter(connect(mapStateToProps, {getPendingRequests,getApprovedRequests, getApprovalRequests })(Request));
