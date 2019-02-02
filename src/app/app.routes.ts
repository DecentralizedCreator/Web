import { RouterModule } from '@angular/router';

// Router Components
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
import { LoginComponent } from './route/login/login.component';
import { HelpComponent } from './route/help/help.component';
import { RoadmapComponent } from './route/roadmap/roadmap.component';

export const Routes = RouterModule.forRoot([
    { path: '', component: IndexComponent },
    { path: 'profile/:profileId', component: ProfileComponent },
    { path: 'profiles', component: ProfilesComponent },
    { path: 'search', component: SearchComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'subscriptions', component: SubscriptionsComponent },
    { path: 'page/:username', component: UserComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'wallets', component: WalletsComponent },
    { path: 'help', component: HelpComponent },
    { path: 'roadmap', component: RoadmapComponent },
    { path: '**', component: NotfoundComponent },
]);
