import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core'; 
@Component({
  selector: 'app-test-page',
  templateUrl: './test.component.html',
  
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TestComponent implements OnInit {
 

  constructor( 
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 
}
