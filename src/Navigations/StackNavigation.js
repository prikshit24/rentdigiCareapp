import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationService from './NavigationService';

// import HomeScreen from '../Screens/Home';
// import LoginScreen from '../Screens/Login';
// import Register from '../Screens/Register.js'
// import ForgotPassword from '../Screens/ForgotPassword.js'
// import Dashboard from '../Screens/Dashboard.js'
// import Sidebar from '../Screens/Sidebar.js'
// import NewPassword from '../Screens/NewPassword.js'
// import Location from '../Screens/Location.js'
// import Details from '../Screens/Details.js'
// import EditProfile from '../Screens/EditProfile.js'
// import CompanyDetail from '../Screens/companyDetail.js'
// import CompanyEdit from '../Screens/companyEdit.js'
// import CompanyAdd from '../Screens/companyAdd.js'
// import Propertyy from '../Screens/propertyy.js'
// import PropertyDtl from '../Screens/propertyDtl.js'
// import PropertyEdit from '../Screens/propertyEdit.js'
// import PropertyAdd from '../Screens/propertyAdd.js'
// import BuildingDtl from '../Screens/buildingDtl.js'
// import BuildingEdt from '../Screens/buildingEdt.js'
// import BuildingAdd from '../Screens/buildingAdd.js'
// import RoomsDtl from '../Screens/roomsDtl.js'
// import RoomsEdt from '../Screens/roomsEdt.js'
// import RoomsAdd from '../Screens/roomsAdd.js'
// import TaskDtl from '../Screens/taskDtl.js'
// import TaskEdt from '../Screens/taskEdt.js'
// import TaskAdd from '../Screens/taskAdd.js'
// import TaskdtlClass from '../Screens/taskdtlClass.js'
// import TaskclassEdt from '../Screens/taskclassEdt.js'
// import TaskclassAdd from '../Screens/taskclassAdd.js'
// import ManagerDtl from '../Screens/managerDtl.js'
// import ManagerAdd from '../Screens/managerAdd.js'
// import ManagerEdit from '../Screens/managerEdit.js'
// import VendorCatadd from '../Screens/VendorCatadd.js'
// import VendorCatdtl from '../Screens/VendorCatdtl.js'
// import VendorCatedt from '../Screens/VendorCatedt.js'
// import Vendoradd from '../Screens/Vendoradd.js'
// import Vendoredit from '../Screens/Vendoredit.js'
// import Vendordtl from '../Screens/Vendordtl.js'
// import Ticketadd from '../Screens/Ticketadd.js'
// import Ticketdetl from '../Screens/Ticketdetl.js'
// import Ticketdetledt from '../Screens/Ticketdetledt.js'
// import Ticketdetlvew from '../Screens/Ticketdetlvew.js'
// import Ticketassg from '../Screens/Ticketassg.js'
// import AssetClassdtl from '../Screens/AssetClassdtl.js'
// import AssetClassadd from '../Screens/AssetClassadd.js'
// import AssetClassedit from '../Screens/AssetClassedit.js'
// import UserAccountdtl from '../Screens/UserAccountdtl.js'
// import UserAccountedt from '../Screens/UserAccountedt.js'
// import UserAccountadd from '../Screens/UserAccountadd.js'
// import ProfileDtls from '../Screens/profileDtls.js'
// import ProfilePass from '../Screens/ProfilePass.js'
// import ResidentDtl from '../Screens/ResidentDtl.js'


const Stack = createStackNavigator();
// const StackNavigation = () => {
//     return (
//         <NavigationContainer initialRouteName="Home" ref={ref => NavigationService.setTopLevelNavigator(ref)}>
//             <Stack.Navigator>
//                 <Stack.Screen
//                     name="Home"
//                     component={HomeScreen}
//                     options={{ headerShown: false }}
//                 />
//                 <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//                 <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
//                 <Stack.Screen name="forgotpassword" component={ForgotPassword} options={{ headerShown: false }} />
//                 <Stack.Screen name="newpassword" component={NewPassword} options={{ headerShown: false }} />
//                 <Stack.Screen name="dashboard" component={Dashboard} options={{ headerShown: false }} />
//                 <Stack.Screen name="sidebar" component={Sidebar} options={{ headerShown: false }} />
//                 <Stack.Screen name="location" component={Location} options={{ headerShown: false }} />
//                 <Stack.Screen name="details" component={Details} options={{ headerShown: false }} />
//                 <Stack.Screen name="editprofile" component={EditProfile} options={{ headerShown: false }} />
//                 <Stack.Screen name="companyDetail" component={CompanyDetail} options={{ headerShown: false }} />
//                 <Stack.Screen name="companyEdit" component={CompanyEdit} options={{ headerShown: false }} />
//                 <Stack.Screen name="companyAdd" component={CompanyAdd} options={{ headerShown: false }} />
//                 <Stack.Screen name="propertyy" component={Propertyy} options={{ headerShown: false }} />
//                 <Stack.Screen name="propertyDtl" component={PropertyDtl} options={{ headerShown: false }} />
//                 <Stack.Screen name="propertyEdit" component={PropertyEdit} options={{ headerShown: false }} />
//                 <Stack.Screen name="propertyAdd" component={PropertyAdd} options={{ headerShown: false }} />
// =                <Stack.Screen name="buildingDtl" component={BuildingDtl} options={{ headerShown: false }} />
//                 <Stack.Screen name="buildingEdt" component={BuildingEdt} options={{ headerShown: false }} />
//                 <Stack.Screen name="buildingAdd" component={BuildingAdd} options={{ headerShown: false }} />
//                 <Stack.Screen name="roomsDtl" component={RoomsDtl} options={{ headerShown: false }} />
//                 <Stack.Screen name="roomsEdt" component={RoomsEdt} options={{ headerShown: false }} />
//                 <Stack.Screen name="roomsAdd" component={RoomsAdd} options={{ headerShown: false }} />
//                 <Stack.Screen name="taskDtl" component={TaskDtl} options={{ headerShown: false }} />
//                 <Stack.Screen name="taskEdt" component={TaskEdt} options={{ headerShown: false }} />
//                 <Stack.Screen name="taskAdd" component={TaskAdd} options={{ headerShown: false }} />
//                 <Stack.Screen name="taskdtlClass" component={TaskdtlClass} options={{ headerShown: false }} />
//                 <Stack.Screen name="taskclassEdt" component={TaskclassEdt} options={{ headerShown: false }} />
//                 <Stack.Screen name="taskclassAdd" component={TaskclassAdd} options={{ headerShown: false }} />
//                 <Stack.Screen name="managerDtl" component={ManagerDtl} options={{ headerShown: false }} />
//                 <Stack.Screen name="managerAdd" component={ManagerAdd} options={{ headerShown: false }} />
//                 <Stack.Screen name="managerEdit" component={ManagerEdit} options={{ headerShown: false }} />
//                 <Stack.Screen name="Ticketdetlvew" component={Ticketdetlvew} options={{ headerShown: false }} />
//                 <Stack.Screen name="Ticketadd" component={Ticketadd} options={{ headerShown: false }} />
//                 <Stack.Screen name="Ticketdetl" component={Ticketdetl} options={{ headerShown: false }} />
//                 <Stack.Screen name="Ticketdetledt" component={Ticketdetledt} options={{ headerShown: false }} />
//                 <Stack.Screen name="Ticketassg" component={Ticketassg} options={{ headerShown: false }} />
//                 <Stack.Screen name="VendorCatadd" component={VendorCatadd} options={{ headerShown: false }} />
//                 <Stack.Screen name="VendorCatdtl" component={VendorCatdtl} options={{ headerShown: false }} />
//                 <Stack.Screen name="VendorCatedt" component={VendorCatedt} options={{ headerShown: false }} />
//                 <Stack.Screen name="Vendoradd" component={Vendoradd} options={{ headerShown: false }} />
//                 <Stack.Screen name="Vendoredit" component={Vendoredit} options={{ headerShown: false }} />
//                 <Stack.Screen name="Vendordtl" component={Vendordtl} options={{ headerShown: false }} />
//                 <Stack.Screen name="AssetClassdtl" component={AssetClassdtl} options={{ headerShown: false }} />
//                 <Stack.Screen name="AssetClassadd" component={AssetClassadd} options={{ headerShown: false }} />
//                 <Stack.Screen name="AssetClassedit" component={AssetClassedit} options={{ headerShown: false }} />
//                 <Stack.Screen name="UserAccountdtl" component={UserAccountdtl} options={{ headerShown: false }} />
//                 <Stack.Screen name="UserAccountedt" component={UserAccountedt} options={{ headerShown: false }} />
//                 <Stack.Screen name="UserAccountadd" component={UserAccountadd} options={{ headerShown: false }} />
//                 <Stack.Screen name="ProfileDtls" component={ProfileDtls} options={{ headerShown: false }} />
//                 <Stack.Screen name="ProfilePass" component={ProfilePass} options={{ headerShown: false }} />
//                 <Stack.Screen name="ResidentDtl" component={ResidentDtl} options={{ headerShown: false }} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };

export default StackNavigation;

