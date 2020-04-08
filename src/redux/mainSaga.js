import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView26818Saga from '../features/CalendarView26818/redux/sagas';
import EmailAuth26793Saga from '../features/EmailAuth26793/redux/sagas';
import EmailAuth26716Saga from '../features/EmailAuth26716/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView26818Saga,
EmailAuth26793Saga,
EmailAuth26716Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}