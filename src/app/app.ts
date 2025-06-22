import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './shared';
import { merge, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  $isSidebarCollapse = signal(false);

  private _toToggleSidebar$ = new Subject<void>();
  private readonly _destroy$ = new Subject<void>();

  ngOnInit(): void {
    const watchToggleSidebar$ = this._toToggleSidebar$.pipe(
      tap(() => this.$isSidebarCollapse.update(prev => !prev))
    );

    merge(watchToggleSidebar$).pipe(takeUntil(this._destroy$)).subscribe();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  onToggleSidebar() {
    this._toToggleSidebar$.next();
  }
}
