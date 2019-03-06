import { connect } from 'react-redux'
import { appSelectors, appCreators } from './../App/Duck'
import About from './About.js'

const mapStateToProps = state => {
  const storyContent = appSelectors.getStoryContent(state)
  const storyImg = appSelectors.getStoryImg(state)
  return {
    storyContent,
    storyImg
  }
}

const mapDispatchToProps = dispatch => {
  const setStoryContent = (value) => dispatch(appCreators.setStoryContent(value))
  const setStoryImg = (value) => dispatch(appCreators.setStoryImg(value))
  return {
    setStoryContent,
    setStoryImg
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
