import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Expert, ExpertLevel } from '../../models/expert.model';

@Component({
  selector: 'app-expert-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expert-card.component.html',
})
export class ExpertCardComponent {
  @Input() expert!: Expert;
  @Input() index!: number;

  get style() {
    switch (this.expert.level) {
      case 'professor':
        return {
          container: 'bg-amber-500/10 ...',
          badge: 'bg-amber-500/20 ...',
          name: 'text-amber-300 ...',
          icon: '🎓'
        };
      case 'chief':
        return {
          container: 'bg-emerald-500/10 ...',
          badge: 'bg-emerald-500/20 ...',
          name: 'text-emerald-300 ...',
          icon: '🏥'
        };
      case 'expert':
        return {
          container: 'bg-violet-500/10 ...',
          badge: 'bg-violet-500/20 ...',
          name: 'text-violet-300 ...',
          icon: '🏆'
        };
      default:
        return {
          container: 'bg-pulse-500/10 ...',
          badge: 'bg-pulse-500/20 ...',
          name: 'text-pulse-300 ...',
          icon: '🩺'
        };
    }
  }
}
