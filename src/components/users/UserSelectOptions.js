import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getUsers} from '../../actions/userActions';

const UserSelectOptions = ({getUsers, user: {users, loading}}) => {

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);


  return (
    !loading && users !== null && users.map(u => <option key={u.id} value={`${u.firstName} ${u.lastName}` }>
      {u.firstName} {u.lastName}
    </option>)
  )
}

UserSelectOptions.propTypes = {

}

UserSelectOptions.propTypes = {
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {getUsers})(UserSelectOptions)
