import { combineReducers } from 'redux'
import attributes from './attributes'
import combinations from './combinations'
import defaultCombinations from './defaultCombinations'
import specifications from './specifications'
import fptReducer from './fpt'

const rootReducer = combineReducers({
  attributes,
  combinations,
  defaultCombinations,
  specifications,
  fptReducer  
})

export default rootReducer