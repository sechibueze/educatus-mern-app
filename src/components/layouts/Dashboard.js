import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/authActions';
import PropTypes from 'prop-types';
const Dashboard = ({ user, loadUser }) => {
  useEffect(() => loadUser(), []);
  return (
    <Fragment>
      <div className="mb-1">
        <p className="text text-primary">Welcome, { user && user.name}</p>
      </div>
      
      <div className="dashboard-navigation">
        <Link to='/edit'>Edit Profile</Link>
        <Link to='/edit'>Add Education </Link>
        <Link to='/edit'>Add Experienc</Link>
        
      </div>
      

      {/* Manage Education */}
      <div className="manage-education">
        <p className="text text-primary">Manage Education</p>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th className="hide-sm">Year</th>
              <th>Degree</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>University of Michigan</td>
              <td className="hide-sm">2001 - 2019</td>
              <td>B.Sc, Computer Science</td>
              <td> <a href="#!" className="btn btn-danger">DELETE</a></td>
            </tr>
            <tr>
              <td>University of Michigan</td>
              <td className="hide-sm">2001 - 2019</td>
              <td>B.Sc, Computer Science</td>
              <td> <a href="!#" className="btn btn-danger">DELETE</a></td>
            </tr>
            <tr>
              <td>University of Michigan</td>
              <td className="hide-sm">2001 - 2019</td>
              <td>B.Sc, Computer Science</td>
              <td> <a href="#" className="btn btn-danger">DELETE</a></td>
            </tr>
          </tbody>

        </table>
      </div>

      {/* Manage Experience */}
      <div className="manage-experience">
        <p className="text text-primary">Manage Experience</p>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Position </th>
              <th className="hide-sm"> Duration</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lightworth Computing</td>
              <td> Fullstack Web Developer</td>
              <td className="hide-sm">2019-current</td>
              <td> <a href="#" className="btn btn-danger">DELETE</a></td>
            </tr>
            <tr>
              <td>Teach for Nigeria</td>
              <td> Fellow</td>
              <td className="hide-sm">2018-2020</td>
              <td> <a href="#" className="btn btn-danger">DELETE</a></td>
            </tr>
          </tbody>

        </table>
      </div>
    </Fragment>
  );
}
Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object
};
 const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated,
   user: state.auth.user
 });
export default connect(mapStateToProps, { loadUser })(Dashboard);