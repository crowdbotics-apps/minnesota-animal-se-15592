import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView26818Reducer from '../features/CalendarView26818/redux/reducers';
import EmailAuth26793Reducer from '../features/EmailAuth26793/redux/reducers';
import SignIn126751Reducer from '../features/SignIn126751/redux/reducers'
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
CalendarView26818: CalendarView26818Reducer,
EmailAuth26793: EmailAuth26793Reducer,
SignIn126751: SignIn126751Reducer,
EmailAuth26716: EmailAuth26716Reducer,
SignIn126674: SignIn126674Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});