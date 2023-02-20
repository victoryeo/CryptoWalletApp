import { StackActions, CommonActions } from '@react-navigation/native';

const config = {};
export function initNavigator(nav) {
  if (nav) {
    config.navigator = nav;
  }
}

function dispatchAction(action) {
  if (config.navigator) {
    config.navigator.dispatch(action);
  }
}

export function navigate(routeName, params) {
  const action = CommonActions.navigate({ name: routeName, params });
  dispatchAction(action);
}

export function push(routeName, params) {
  const action = StackActions.push(routeName, params);
  dispatchAction(action);
}

export function pop() {
  const action = StackActions.pop();
  dispatchAction(action);
}

export function replaceStack(routeName, params) {
  const action = StackActions.replace(routeName, params);
  dispatchAction(action);
}

export function popToTop() {
  const action = StackActions.popToTop();
  dispatchAction(action);
}
