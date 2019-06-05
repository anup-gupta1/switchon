import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class RequestItem extends Component {
    constructor(props){
        super(props);
        this.setState = {
            type:''
        }
    }


    componentDidMount(){
      
    }






    render() {
        const {request} = this.props;
        return (
            <div className="d-flex justify-content-between request-item-container">
                <div>{request.text}</div>
                <i class="material-icons">more_vert</i>
            </div>
        )
    }
}





const mapStateToProps = state => ({
  


});

export default withRouter(connect(mapStateToProps, { })(RequestItem));
