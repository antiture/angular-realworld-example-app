import { ApplicationConfig, inject, provideAppInitializer, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { JwtService } from './core/auth/services/jwt.service';
import { UserService } from './core/auth/services/user.service';
import { apiInterceptor } from './core/interceptors/api.interceptor';
import { tokenInterceptor } from './core/interceptors/token.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { EMPTY } from 'rxjs';
import { TAGS_SERVICE } from './features/article/services/tags.service.interface';
import { TagsService } from './features/article/services/tags.service';
import { GET_NAME_SERVICE } from './features/article/services/tags.service.interface';
import { GetNameService } from './features/article/services/tags.service';
import { GET_STRING_SERVICE } from './features/article/services/tags.service.interface';
import { GetStringService } from './features/article/services/tags.service';

export function initAuth(jwtService: JwtService, userService: UserService) {
  return () => (jwtService.getToken() ? userService.getCurrentUser() : EMPTY);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([apiInterceptor, tokenInterceptor, errorInterceptor])),
    provideAppInitializer(() => {
      const initializerFn = initAuth(inject(JwtService), inject(UserService));
      return initializerFn();
    }),
    { provide: TAGS_SERVICE, useExisting: TagsService },
    { provide: GET_NAME_SERVICE, useExisting: GetNameService },
    { provide: GET_STRING_SERVICE, useExisting: GetStringService },
    
  ],
};



