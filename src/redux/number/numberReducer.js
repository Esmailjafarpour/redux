const initialState = {
     number : 100
}

const numberReducer = (state = initialState , action) => {

     switch (action.type) {

          case "INCREASE_NUMBER":

               return{
                    ...state,
                    number : state.number+1
               }

               break;

          case "DECREASE_NUMBER":

               return{
                    ...state,
                    number : state.number-1
               }

               break;
     
          default:
               return state;

     }

}

export default numberReducer;