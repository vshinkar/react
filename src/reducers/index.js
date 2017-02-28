import { combineReducers } from 'redux'
import attributes from './attributes'
import combinations from './combinations'
import defaultCombinations from './defaultCombinations'
import specifications from './specifications'

export default combineReducers({
  attributes,
  combinations,
  defaultCombinations,
  specifications
})