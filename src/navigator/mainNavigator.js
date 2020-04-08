import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile26742Navigator from '../features/UserProfile26742/navigator';
import BlankScreen26736Navigator from '../features/BlankScreen26736/navigator';
import BlankScreen26735Navigator from '../features/BlankScreen26735/navigator';
import BlankScreen26734Navigator from '../features/BlankScreen26734/navigator';
import BlankScreen26733Navigator from '../features/BlankScreen26733/navigator';
import Contacts26730Navigator from '../features/Contacts26730/navigator';
import EmailAuth26716Navigator from '../features/EmailAuth26716/navigator';
import Maps26697Navigator from '../features/Maps26697/navigator';
import Messaging26693Navigator from '../features/Messaging26693/navigator';
import NotificationList26687Navigator from '../features/NotificationList26687/navigator';
import Settings26676Navigator from '../features/Settings26676/navigator';
import SignIn126674Navigator from '../features/SignIn126674/navigator';
import UserProfile26665Navigator from '../features/UserProfile26665/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile26742: { screen: UserProfile26742Navigator },
BlankScreen26736: { screen: BlankScreen26736Navigator },
BlankScreen26735: { screen: BlankScreen26735Navigator },
BlankScreen26734: { screen: BlankScreen26734Navigator },
BlankScreen26733: { screen: BlankScreen26733Navigator },
Contacts26730: { screen: Contacts26730Navigator },
EmailAuth26716: { screen: EmailAuth26716Navigator },
Maps26697: { screen: Maps26697Navigator },
Messaging26693: { screen: Messaging26693Navigator },
NotificationList26687: { screen: NotificationList26687Navigator },
Settings26676: { screen: Settings26676Navigator },
SignIn126674: { screen: SignIn126674Navigator },
UserProfile26665: { screen: UserProfile26665Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
