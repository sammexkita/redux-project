import { Saga } from "@redux-saga/types";
import { all } from "redux-saga/effects";

import cart from "./cart/sagas";

export default function* rootSaga() {
  const res = yield all([cart]);

  return res;
}