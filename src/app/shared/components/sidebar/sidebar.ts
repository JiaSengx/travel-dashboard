import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faOutdent, faIndent, faHome } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../button/button';
import { addObjectsByIdToArray, removeObjectsByIdFromArray } from '../../utils';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FontAwesomeModule, Button],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  $isCollapse = input.required<boolean>({ alias: 'isCollapse' });
  toggle = output<void>();

  $toggleIcon = computed(() => (this.$isCollapse() ? faIndent : faOutdent));
  home = faHome;

  onToggle() {
    const existingItems = [
      { id: 'test1', desc: 'test1' },
      { id: 'test2', desc: 'test2' }
    ];
    const items = [
      { id: 'test1', desc: 'updated1' },
      { id: 'test3', desc: 'desc3' }
    ];

    const removedItems = removeObjectsByIdFromArray(existingItems, items);
    const addItems = addObjectsByIdToArray(existingItems, items);

    console.log('remove test', removedItems, 'add test', addItems);

    this.toggle.emit();
  }
}
