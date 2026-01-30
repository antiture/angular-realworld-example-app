import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { ITagsService, ITestService as ITestService, TAGS_SERVICE, GET_NAME_SERVICE as GET_NAME_SERVICE, GET_STRING_SERVICE } from './tags.service.interface';
 
@Injectable({ providedIn: 'root' })


export class TagsService implements ITagsService {
  constructor(
    private readonly http: HttpClient,
    @Inject(GET_NAME_SERVICE) private nameService: ITestService,
    @Inject(GET_STRING_SERVICE) private stringService: ITestService
    
  ) { }

  getAll(): Observable<string[]> {
    return this.http
      .get<{ tags: string[] }>('/tags')
      .pipe(map(data => data.tags));
  }
  getName(): string{
    return this.nameService.getTestName();
  }
  getString(): string{
    return this.stringService.getTestName();
  }
}
@Injectable({ providedIn: 'root' })
export class GetNameService implements ITestService {
  constructor() { }
 
  getTestName(): string {
    return this.constructor.name;
  }
}

@Injectable({ providedIn: 'root' })
export class GetStringService implements ITestService {
  constructor() { }
 
  getTestName(): string {
    return "string service name";
  }
}


