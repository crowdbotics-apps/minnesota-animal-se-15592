import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth26820Navigator from '../features/EmailAuth26820/navigator';
import Camera26819Navigator from '../features/Camera26819/navigator';
import CalendarView26818Navigator from '../features/CalendarView26818/navigator';
import Maps26817Navigator from '../features/Maps26817/navigator';
import Tutorial26816Navigator from '../features/Tutorial26816/navigator';
import Messaging26815Navigator from '../features/Messaging26815/navigator';
import BlankScreen26813Navigator from '../features/BlankScreen26813/navigator';
import BlankScreen26812Navigator from '../features/BlankScreen26812/navigator';
import BlankScreen26811Navigator from '../features/BlankScreen26811/navigator';
import BlankScreen26810Navigator from '../features/BlankScreen26810/navigator';
import Contacts26807Navigator from '../features/Contacts26807/navigator';
import EmailAuth26793Navigator from '../features/EmailAuth26793/navigator';
import Maps26774Navigator from '../features/Maps26774/navigator';
import Messaging26770Navigator from '../features/Messaging26770/navigator';
import NotificationList26764Navigator from '../features/NotificationList26764/navigator';
import Settings26753Navigator from '../features/Settings26753/navigator';
import SignIn126751Navigator from '../features/SignIn126751/navigator';
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
EmailAuth26820: { screen: EmailAuth26820Navigator },
Camera26819: { screen: Camera26819Navigator },
CalendarView26818: { screen: CalendarView26818Navigator },
Maps26817: { screen: Maps26817Navigator },
Tutorial26816: { screen: Tutorial26816Navigator },
Messaging26815: { screen: Messaging26815Navigator },
BlankScreen26813: { screen: BlankScreen26813Navigator },
BlankScreen26812: { screen: BlankScreen26812Navigator },
BlankScreen26811: { screen: BlankScreen26811Navigator },
BlankScreen26810: { screen: BlankScreen26810Navigator },
Contacts26807: { screen: Contacts26807Navigator },
EmailAuth26793: { screen: EmailAuth26793Navigator },
Maps26774: { screen: Maps26774Navigator },
Messaging26770: { screen: Messaging26770Navigator },
NotificationList26764: { screen: NotificationList26764Navigator },
Settings26753: { screen: Settings26753Navigator },
SignIn126751: { screen: SignIn126751Navigator },
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
