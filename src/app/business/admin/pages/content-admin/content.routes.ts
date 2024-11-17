import {Routes} from '@angular/router';
import {AddContentComponent} from './pages/add-content/add-content.component';
import {ContentAdminComponent} from './content-admin.component';
import {EditContentComponent} from './pages/edit-content/edit-content.component';
import {HistoryAdminContentComponent} from './pages/history-admin-content/history-admin-content.component';

export const ContentRoutes: Routes = [
  { path: '',
    children:[
      { path: '', component: ContentAdminComponent },
      { path: 'insert-content', component: AddContentComponent},
      { path: 'edit-content/:id', component: EditContentComponent},
      { path: 'history-admin-content', component: HistoryAdminContentComponent }
    ],

  }];
