import { connect } from 'react-redux'
import { appSelectors, appCreators } from './../App/Duck'
import Retailers from './Retailers.js'

const mapStateToProps = state => {
  const retailers = appSelectors.getRetailers(state)
  return {
    retailers
  }
}

const mapDispatchToProps = dispatch => {
  const setRetailers = (value) => dispatch(appCreators.setRetailers(value))
  return {
    setRetailers
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Retailers)
