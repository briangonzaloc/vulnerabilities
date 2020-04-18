/*----- Core -----*/
import React from 'react'
import { connect } from 'react-redux'

/*----- Components -----*/
import CustomForm from '../../components/form/Form'
import Header from '../../components/header/Header'
import RepositoryTable from '../../components/table/RepositoryTable'

/*----- Redux -----*/
import { searchRespositories } from '../../redux/actions/RespositoriesActions'
import { repositories, repositoriesLoading, repositoriesError } from '../../redux/selectors/RepositoriesSelector'

const Home = (props) => {
	return (
		<>
			<Header/>
			<CustomForm onSubmit={props.searchRespositories}/>
			<RepositoryTable 
				loading = {props.loading}
				data = {props.repositories}
			/>
		</>
	)
}

function mapStateToProps(state) {
    return {
		repositories: repositories       (state),
		loading     : repositoriesLoading(state),
		error       : repositoriesError  (state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchRespositories: (payload) => searchRespositories(dispatch, payload),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)