import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faOutdent, faIndent, faHome } from '@fortawesome/free-solid-svg-icons';
import { Button } from "../button/button";

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
    this.toggle.emit();
  }
}
