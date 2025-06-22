import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faOutdent, faIndent } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  $isCollapse = input.required<boolean>({ alias: 'isCollapse' });
  toggle = output<void>();

  $toggleIcon = computed(() => (this.$isCollapse() ? faIndent : faOutdent));

  onToggle() {
    this.toggle.emit();
  }
}
