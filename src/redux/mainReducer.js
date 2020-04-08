import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth26716Reducer from '../features/EmailAuth26716/redux/reducers';
import SignIn126674Reducer from '../features/SignIn126674/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth26716: EmailAuth26716Reducer,
SignIn126674: SignIn126674Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});