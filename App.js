import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SignintScreen from './src/screens/SigninScreen';
import SignuptScreen from './src/screens/SignupScreen';
import TeamCreateScreen from './src/screens/TeamCreateScreen';
import TeamListeScreen from './src/screens/TeamListeScreen';
import TeamDetailScreen from './src/screens/TeamDetailScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
const switchNavigator = createSwitchNavigator({
    ResolveAuth:ResolveAuthScreen,
    loginFlow:createStackNavigator({
      Signin: SignintScreen,
      Signup: SignuptScreen
    }),
    mainFlow: createBottomTabNavigator({
      teamListeFlow: createStackNavigator({
        TeamListe: TeamListeScreen,
        TeamDetail: TeamDetailScreen
      }),
      TeamCreate: TeamCreateScreen,
      Account: AccountScreen
    })
});

const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator)=> { setNavigator(navigator) }} />
    </AuthProvider>
  );
};