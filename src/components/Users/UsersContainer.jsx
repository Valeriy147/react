import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  setShowedPages,
} from '../../redux/users-reducer';
import * as axios from 'axios';
import UsersC from './UsersC';
import s from './Users.module.css';
import Loader from '../common/Loader/Loader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  showNextPages = () => {
    let startPages = this.props.startPage;
    let endPages = this.props.endPage;
    if (this.props.endPage < Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
      startPages = startPages + 20;
      endPages = endPages + 20;
    }
    this.props.setShowedPages(startPages, endPages);
  };
  showPrevPages = () => {
    let startPages = this.props.startPage;
    let endPages = this.props.endPage;
    if (this.props.startPage >= 20) {
      startPages = startPages - 20;
      endPages = endPages - 20;
    }
    this.props.setShowedPages(startPages, endPages);
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
        <UsersC
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          onPageChanged={this.onPageChanged}
          startPage={this.props.startPage}
          endPage={this.props.endPage}
          showNextPages={this.showNextPages}
          showPrevPages={this.showPrevPages}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    startPage: state.usersPage.startPage,
    endPage: state.usersPage.endPage,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  setShowedPages,
})(UsersContainer);
