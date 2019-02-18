import React, {Component} from 'react';
import HeaderUser from './headerUser';
import {withRouter} from 'react-router-dom';

class ChangePassword extends Component{
    onChangePassword = (e) => {
      e.preventDefault();

      const oldPassword = document.getElementById('oldPassword').value;
      const newPassword = document.getElementById('newPassword').value;

      Accounts.changePassword(oldPassword, newPassword, (err)=>{
        console.log(err)
      })
    }

    render(){
        return(
            <React.Fragment>
              <HeaderUser/>
              <div>
                <div className="input-group">
                  <label htmlFor="name">Old Password</label>
                  <input type="password" id="oldPassword" placeholder="Old Password" className="form-control" />
                </div>
                <div className="input-group">
                  <label htmlFor="name">New Password</label>
                  <input type="password" id="newPassword" placeholder="New Password" className="form-control" />
                </div>
                <button className="btn btn-success myBtn" onClick={this.onChangePassword}>Change Password</button>
              </div>
            </React.Fragment>
        )
    }
}

export default withRouter(ChangePassword);