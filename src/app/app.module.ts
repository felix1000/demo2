import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';

import { SystemSettingPage } from '../pages/system-setting/system-setting';

import { ProductManagementPage } from '../pages/product-management/product-management';

import { ResourceMappingPage } from '../pages/resource-mapping/resource-mapping';
import { LayoutManagementPage } from '../pages/layout-management/layout-management';

import { LayoutListDesktopPage} from '../pages/layout-list-desktop/layout-list-desktop';
import { LayoutListMobilePage} from '../pages/layout-list-mobile/layout-list-mobile';
import { CustomizeCssPage } from '../pages/customize-css/customize-css';
import { RoleSettingPage } from '../pages/role-setting/role-setting';
import { SystemParameterPage } from '../pages/system-parameter/system-parameter';
import { AduitLogPage } from '../pages/aduit-log/aduit-log';



import { MyProfileMenuComponent } from './my-profile-menu/my-profile-menu.component';
import { PopoverPage } from './my-profile-menu/pop-over-page.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyStepperComponent } from './my-stepper/my-stepper.component';
import { MyProductContainerComponent } from './my-product-container/my-product-container.component';
import { MyResourcePanelComponent } from './my-resource-panel/my-resource-panel.component';
import { MyResourceNewItemComponent } from './my-resource-new-item/my-resource-new-item.component';
import { MyResourceItemComponent } from './my-resource-item/my-resource-item.component';
import { MyProductNewItemComponent } from './my-product-new-item/my-product-new-item.component';
import { MyProductListComponent } from './my-product-list/my-product-list.component';

import { MyResourceMapNewItemComponent } from './my-resource-map-new-item/my-resource-map-new-item.component';
import { MyResourceMapItemComponent } from './my-resource-map-item/my-resource-map-item.component';
import { MyResourceMapListComponent } from './my-resource-map-list/my-resource-map-list.component';

import { MyResourceMapCardComponent } from './my-resource-map-card/my-resource-map-card.component';
import { MyFabComponent } from './my-fab/my-fab.component';

import { MyRoleCardComponent } from './my-role-card/my-role-card.component';
import { MyRoleCardListComponent } from './my-role-card-list/my-role-card-list.component';
@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    ProductManagementPage,
    LayoutListDesktopPage,
    LayoutListMobilePage,
    ResourceMappingPage,
    MyProfileMenuComponent,
    PopoverPage,
    LayoutManagementPage,
    SystemSettingPage,
    CustomizeCssPage ,
    RoleSettingPage,
    SystemParameterPage,
    AduitLogPage ,
    MyStepperComponent,
    MyProductContainerComponent,
    MyResourcePanelComponent,
    MyResourceNewItemComponent,
    MyResourceItemComponent,
    MyProductNewItemComponent,
    MyProductListComponent,
    MyResourceMapNewItemComponent,
    MyResourceMapItemComponent,
    MyResourceMapListComponent,
    MyResourceMapCardComponent,
    MyFabComponent,
    MyRoleCardComponent,
    MyRoleCardListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    
    ProductManagementPage,
    ResourceMappingPage,
    MyApp,
    LayoutListDesktopPage,
    LayoutListMobilePage,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    PopoverPage,
    LayoutManagementPage,
    SystemSettingPage,
    CustomizeCssPage ,
    RoleSettingPage,
    SystemParameterPage,
    AduitLogPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
