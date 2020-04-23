import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure';

import NoDataView from '../common/NoDataView';

@inject('usersStore')
@observer
class UsersPage extends Component {

    componentDidMount() {
        this.doNetworkCalls()
    }

    getUserStore = () => {
        console.log("mobxTodoStore:", this.props.mobxTodoStore)
        return this.props.usersStore

    }

    renderUsersList = () => {
        const { users } = this.getUserStore()
        if(users.length === 0) {
            return <NoDataView/>
        }
        return users.map(userName => <div key={Math.random()}>{userName}</div>)
    }

    doNetworkCalls = () => {
        this.getUserStore().getUsersApi()
    }

    render() {
        const { getUsersApiStatus, getUsersApiError } = this.getUserStore()
        return(
                <LoadingWrapperWithFailure 
                apiStatus={getUsersApiStatus} 
                apiError={getUsersApiError}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderUsersList}
                />
        );
    }
}

export default UsersPage