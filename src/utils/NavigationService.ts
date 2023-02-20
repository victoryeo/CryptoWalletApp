import { StackActions, CommonActions } from '@react-navigation/native';

interface configType {
  navigator: any;
}

const config: configType = {
  navigator: null,
};

export function initNavigator(nav: any) {
  if (nav) {
    config.navigator = nav;
  }
}

function dispatchAction(action: any) {
  if (config.navigator) {
    config.navigator.dispatch(action);
  }
}

export function navigate(routeName: string, params: any): any {
  const action = CommonActions.navigate({ name: routeName, params });
  dispatchAction(action);
}

export function push(routeName: string, params: any) {
  const action = StackActions.push(routeName, params);
  dispatchAction(action);
}

export function pop() {
  const action = StackActions.pop();
  dispatchAction(action);
}

export function replaceStack(routeName: string, params: any) {
  const action = StackActions.replace(routeName, params);
  dispatchAction(action);
}

export function popToTop() {
  const action = StackActions.popToTop();
  dispatchAction(action);
}
