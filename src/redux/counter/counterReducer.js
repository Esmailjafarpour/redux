
const initialState = {
     counter : 0
}

const counterReducer = (state = initialState , action) => {

     switch (action.type) {

          case "INCREASE_COUNTER":

               return{
                    ...state,
                    counter : state.counter+1
               }

               break;

          case "DECREASE_COUNTER":

               return{
                    ...state,
                    counter : state.counter-1
               }

               break;
     
          default:
               return state;

     }

}

export default counterReducer;