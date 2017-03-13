if (typeof window.defaultCombinations === 'undefined') {
    console.log('old defaultCombinationsTemp');
    var defaultCombinationsTemp = {"attributes_values": {"2": "Black", "3": "Left Hand Drain Base", "5": "60 x 36"}, "attributes": {"2": 293, "3": 11, "5": 316}, "price": 472, "specific_price": [], "ecotax": 0, "weight": 0, "quantity": 23, "reference": "DLT-1036601-88", "unit_impact": "0.000000", "minimal_quantity": "1", "default_on": "0", "upc": "849388037969", "available_date": "2016-11-12", "date_formatted": "11/12/2016", "id_image": 16074, "list": "'293','11','316'", "combinations_feature": "293_11", "idCombination": 116};
} else {
    var defaultCombinationsTemp = window.defaultCombinations
}

import { SET_COMBINATION } from '../constants/Global'
        const initialState = defaultCombinationsTemp;

export default function defaultCombinations(state = initialState, action) {

    switch (action.type) {
        case SET_COMBINATION:
            return Object.assign({}, state, action.combination);

        default:
            return state;
    }

}
