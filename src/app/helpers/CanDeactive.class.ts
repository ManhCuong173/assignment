import { Observable } from 'rxjs';
import { CanDeactivate } from '@angular/router';
import {RouterHelperService} from './router-helper.service'

export interface CanComponentDeactive {
  canDeactive: () => Observable<boolean> | Promise<boolean> | boolean
}

export class ConfirmDeactiveGuard implements CanDeactivate<CanComponentDeactive> {
  isBack: RouterHelperService
  canDeactivate(component: CanComponentDeactive) {
    return window.confirm('Nếu bạn rời khỏi trang làm bài, bài thi của bạn sẽ không được tính!');
  }
}