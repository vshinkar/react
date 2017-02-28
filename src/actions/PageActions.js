import { SET_COMBINATION } from '../constants/Global'

export function setDefaultCombination(combination) {

return {
    type: SET_COMBINATION,
    combination: combination
  }

}
