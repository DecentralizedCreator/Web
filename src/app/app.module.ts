// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// External Modules
import { QRCodeModule } from 'angularx-qrcode';

// Services
import { RegisterService } from './service/form/register.service';
import { UserService } from './service/user/user.service';
import { SearchService } from './service/form/search.service';
import { ProfileService } from './service/profile/profile.service';
import { ProfilesService } from './service/profile/profiles.service';
import { SettingsService } from './service/settings/settings.service';
import { SessionService } from './service/utility/session.service';
import { UtilityService } from './service/utility/utility.service';
import { ShippingService } from './service/settings/shipping.service';
import { CryptoService } from './service/utility/crypto.service';
import { WalletService } from './service/wallet/wallet.service';
import { MetamaskService } from './service/wallet/metamask.service';
import { ErrorService } from './service/utility/error.service';

// Application Routes
import { Routes } from './app.routes';

// Router Components
import { AppComponent } from './route/_root/app.component';
import { IndexComponent } from './route/index/index.component';
import { NotfoundComponent } from './route/notfound/notfound.component';
import { UserComponent } from './route/user/user.component';
import { ProfileComponent } from './route/profile/profile.component';
import { SearchComponent } from './route/search/search.component';
import { SettingsComponent } from './route/settings/settings.component';
import { DashboardComponent } from './route/dashboard/dashboard.component';
import { WalletsComponent } from './route/wallets/wallets.component';
import { ProfilesComponent } from './route/profiles/profiles.component';
import { SubscriptionsComponent } from './route/subscriptions/subscriptions.component';
import { RegisterComponent } from './route/register/register.component';
import { HelpComponent } from './route/help/help.component';
import { RoadmapComponent } from './route/roadmap/roadmap.component';

// Shared Components
import { HeaderComponent } from './component/_shared/header/header.component';
import { FooterComponent } from './component/_shared/footer/footer.component';
import { DisclaimerComponent } from './component/_shared/disclaimer/disclaimer.component';
import { PageLoadingComponent } from './component/_shared/page-loading/page-loading.component';
import { DialogComponent } from './component/_shared/dialog/dialog.component';
import { FormDialogComponent } from './component/_shared/form-dialog/form-dialog.component';

// Route Partial Components
import { EmailUsernameComponent } from './component/settings/email.username/email.username.component';
import { PasswordComponent } from './component/settings/password/password.component';
import { ShippingComponent } from './component/settings/shipping/shipping.component';
import { SearchInputComponent } from './component/search/search-input/search-input.component';
import { SearchResultComponent } from './component/search/search-result/search-result.component';
import { UserBannerComponent } from './component/user/user-banner/user-banner.component';
import { UserHeaderComponent } from './component/user/user-header/user-header.component';
import { UserGoalsComponent } from './component/user/user-goals/user-goals.component';
import { UserSocialComponent } from './component/user/user-social/user-social.component';
import { UserDescriptionComponent } from './component/user/user-description/user-description.component';
import { UserTiersComponent } from './component/user/user-tiers/user-tiers.component';
import { ProfileBannerComponent } from './component/profile/profile-banner/profile-banner.component';
import { ProfileHeaderComponent } from './component/profile/profile-header/profile-header.component';
import { ProfileDescriptionComponent } from './component/profile/profile-description/profile-description.component';
import { ProfileTiersComponent } from './component/profile/profile-tiers/profile-tiers.component';
import { ProfileLinksComponent } from './component/profile/profile-links/profile-links.component';
import { ProfileUrlComponent } from './component/profile/profile-url/profile-url.component';
import { ProfileMetaComponent } from './component/profile/profile-meta/profile-meta.component';
import { ProfileGoalsComponent } from './component/profile/profile-goals/profile-goals.component';
import { ProfileCryptoComponent } from './component/profile/profile-crypto/profile-crypto.component';
import { ProfilePublishComponent } from './component/profile/profile-publish/profile-publish.component';

import { UserCommentsComponent } from './component/user/user-comments/user-comments.component';
import { UserBackersComponent } from './component/user/user-backers/user-backers.component';
import { WalletComponent } from './component/wallets/wallet/wallet.component';
import { ProfileSubsComponent } from './component/profile/profile-subs/profile-subs.component';
import { TwofaComponent } from './component/settings/twofa/twofa.component';
import { MetamaskComponent } from './component/wallets/metamask/metamask.component';
import { ProfileCategoriesComponent } from './component/profile/profile-categories/profile-categories.component';
import { IndexBannerComponent } from './component/index/index-banner/index-banner.component';
import { IndexVideoComponent } from './component/index/index-video/index-video.component';
import { IndexAboutComponent } from './component/index/index-about/index-about.component';
import { RegistrationDialogComponent } from './component/_shared/registration-dialog/registration-dialog.component';
import { ButtonComponent } from './component/_shared/button/button.component';
import { RegisterTabsComponent } from './component/register/register-tabs/register-tabs.component';
import { RegisterFormComponent } from './component/register/register-form/register-form.component';
import { LoginFormComponent } from './component/register/login-form/login-form.component';
import { LoginComponent } from './route/login/login.component';
import { RegisterFormLabelComponent } from './component/register/register-form-label/register-form-label.component';
import { ButtonLabelComponent } from './component/_shared/button-label/button-label.component';
import { LoadingStateComponent } from './component/_shared/loading-state/loading-state.component';
import { SearchPreviewComponent } from './component/search/search-preview/search-preview.component';
import { IndexRoadmapComponent } from './component/index/index-roadmap/index-roadmap.component';
import { IndexMediaComponent } from './component/index/index-media/index-media.component';

@NgModule({
  declarations: [
    // Router Component Declarations
    AppComponent,
    IndexComponent,
    NotfoundComponent,
    UserComponent,
    ProfileComponent,
    SearchComponent,
    SettingsComponent,
    RegisterComponent,
    DashboardComponent,
    WalletsComponent,
    SubscriptionsComponent,
    HelpComponent,
    ProfilesComponent,

    // Shared, Partial Components
    HeaderComponent,
    FooterComponent,
    DisclaimerComponent,
    EmailUsernameComponent,
    PasswordComponent,
    ShippingComponent,
    SearchInputComponent,
    SearchResultComponent,
    UserBannerComponent,
    UserHeaderComponent,
    UserGoalsComponent,
    UserSocialComponent,
    UserDescriptionComponent,
    UserTiersComponent,
    ProfileBannerComponent,
    ProfileHeaderComponent,
    ProfileDescriptionComponent,
    ProfileTiersComponent,
    ProfileLinksComponent,
    ProfileUrlComponent,
    ProfileMetaComponent,
    ProfileGoalsComponent,
    ProfileCryptoComponent,
    ProfilePublishComponent,
    DialogComponent,
    FormDialogComponent,
    UserCommentsComponent,
    UserBackersComponent,
    WalletComponent,
    ProfileSubsComponent,
    PageLoadingComponent,
    TwofaComponent,
    RoadmapComponent,
    MetamaskComponent,
    ProfileCategoriesComponent,
    IndexBannerComponent,
    IndexVideoComponent,
    IndexAboutComponent,
    RegistrationDialogComponent,
    ButtonComponent,
    RegisterTabsComponent,
    RegisterFormComponent,
    LoginFormComponent,
    LoginComponent,
    RegisterFormLabelComponent,
    ButtonLabelComponent,
    LoadingStateComponent,
    SearchPreviewComponent,
    IndexRoadmapComponent,
    IndexMediaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routes,
    QRCodeModule,
  ],
  providers: [
    RegisterService,
    UserService,
    SearchService,
    ProfileService,
    ProfilesService,
    SettingsService,
    SessionService,
    ShippingService,
    CryptoService,
    WalletService,
    MetamaskService,
    UtilityService,
    ErrorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
