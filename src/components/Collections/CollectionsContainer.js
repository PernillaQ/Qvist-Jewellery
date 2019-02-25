import { connect } from 'react-redux'
import { appSelectors, appCreators } from './../App/Duck'
import Collections from './Collections.js'

//  get ,makes the states availible as props.
const mapStateToProps = state => {
  const collectionIntroView = appSelectors.getCollectionIntroView(state) // v
  const showAllJewels = appSelectors.getShowAllJewels(state) // dv
  const detailView = appSelectors.getDetailView(state) //dv
  const allPosts = appSelectors.getAllPosts(state) // v
  const detailId = appSelectors.getDetailId(state) //dv

  return {
    collectionIntroView,
    showAllJewels,
    detailView,
    allPosts,
    detailId
  }
}
//  set
const mapDispatchToProps = dispatch => {
  const toggleCollectionIntroView = (value) => dispatch(appCreators.toggleCollectionIntroView(value)) // v
  const toggleShowAllJewels = (value) => dispatch(appCreators.toggleShowAllJewels(value)) // v
  const setDetailView = (value) => dispatch(appCreators.setDetailView(value)) // v
  const setCollectionOptions = (value) => dispatch(appCreators.setCollectionOptions(value)) // v
  const setAllPosts = (value) => dispatch(appCreators.setAllPosts(value)) // v
  const setDetailId = (value) => dispatch(appCreators.setDetailId(value)) // v

  return {
    toggleCollectionIntroView,
    toggleShowAllJewels,
    setDetailView,
    setCollectionOptions,
    setAllPosts,
    setDetailId
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collections)
