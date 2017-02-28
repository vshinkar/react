if(typeof window.attributes[2] === 'undefined'){
    console.log('old attributesTemp');
    var attributesTemp = {"2":{"group_name":"Color","name":"Color","class":"attr_color","group_type":"color","default":6,"attributes":{"6":"White","293":"Black","14":"Biscuit"}, "attributes_order":["6","293","14"],"path":{"6":"http://dreamline.local/img/co/6.jpg","293":false,"14":"http://dreamline.local/img/co/14.jpg"},"attributes_quantity":{"6":673,"293":194,"14":222}},"3":{"group_name":"Drain Location","name":"Drain Location","class":"attr_drain_location","group_type":"select","default":290,"attributes":{"290":"Corner","11":"Left Hand Drain Base","12":"Right Hand Drain Base"},"attributes_quantity":{"290":236,"11":466,"12":387}},"5":{"group_name":"Size","name":"Size","class":"attr_size","group_type":"select","default":291,"attributes":{"291":"32 x 32","316":"60 x 36","303":"48 x 34","307":"48 x 36","297":"36 x 36"},"attributes_quantity":{"291":125,"316":257,"303":238,"307":358,"297":111}}}; 
}
else{
    var attributesTemp = window.attributes
}

const initialState = attributesTemp;

export default function attributes(state = initialState) {
  return state
}
