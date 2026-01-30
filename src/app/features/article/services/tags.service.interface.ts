import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';

export interface ITagsService {
  getAll(): Observable<string[]>;
  getName(): string;
}

export const TAGS_SERVICE =
  new InjectionToken<ITagsService>('TAGS_SERVICE');



export interface ITestService { 
  getTestName(): string;
}

export const GET_NAME_SERVICE =
  new InjectionToken<ITestService>('GET_NAME_SERVICE');

export const GET_STRING_SERVICE =
  new InjectionToken<ITestService>('GET_STRING_SERVICE');