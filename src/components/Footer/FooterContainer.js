import { connect } from 'react-redux'
import { appSelectors, appCreators } from './../App/Duck'
import Footer from './Footer.js'

const mapStateToProps = state => {
  const admin = appSelectors.getAdmin(state)

  return {
    admin
  }
}

const mapDispatchToProps = dispatch => {
  const toggleAdmin = (value) => dispatch(appCreators.toggleAdmin(value))

  return {
    toggleAdmin
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
