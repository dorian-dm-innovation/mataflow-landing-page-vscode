// expert-committee-section.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Expert, ExpertLevel } from '../../models/expert.model';


@Component({
  selector: 'app-expert-committee',
  templateUrl: './expert-committee.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class ExpertCommitteeComponent {
  experts: Expert[] = [
    {
      name: "Pr. Nicolas Sans",
      role: "PU-PH de Radiologie Expert",
      institution: "CHU de Toulouse",
      speciality: "Imagerie musculo-squelettique",
      level: "professor",
      initials: "NS"
    },
    {
      name: "Pr. Sébastien Aubry",
      role: "Professeur de Radiologie Expert",
      institution: "Université de Franche-Comté",
      speciality: "Imagerie musculo-squelettique",
      level: "professor",
      initials: "SA"
    },
    {
      name: "Pr. Ingrid Millet",
      role: "PU-PH de Radiologie Expert",
      institution: "Hôpital Lapeyronie, Montpellier",
      speciality: "Imagerie des urgences",
      level: "professor",
      initials: "IM"
    },
    {
      name: "Pr. Catherine Cytheval",
      role: "Professeur de Radiologie Expert",
      institution: "CHU de Montpellier",
      speciality: "Imagerie musculo-squelettique",
      level: "professor",
      initials: "CC"
    },
    {
      name: "Pr. Gilbert Ferretti",
      role: "Professeur de Radiologie Expert",
      institution: "CHU de Grenoble",
      speciality: "Imagerie thoracique",
      level: "professor",
      initials: "GF"
    },
    {
      name: "Pr. Julien Frandon",
      role: "Professeur de Radiologie Expert",
      institution: "Université de Nîmes",
      speciality: "Radiologie interventionnelle",
      level: "professor",
      initials: "JF"
    },
    {
      name: "Pr. Philippe Douek",
      role: "Professeur de Radiologie Expert",
      institution: "CHU de Lyon",
      speciality: "Imagerie cardiaque et vasculaire",
      level: "professor",
      initials: "PD"
    },
    {
      name: "Dr. Marc Zins",
      role: "Chef de Service de Radiologie Expert",
      institution: "Hôpital Saint-Joseph de Paris",
      speciality: "Radiologie abdominale",
      level: "chief",
      initials: "MZ"
    },
    {
      name: "Dr. Julien Savatovsky",
      role: "Chef de Service Expert",
      institution: "Hôpital Fondation Rothschild",
      speciality: "Neuroradiologie",
      level: "chief",
      initials: "JS"
    },
    {
      name: "Dr. Franck Lapegue",
      role: "Radiologue Expert",
      institution: "Expert en imagerie musculo-squelettique",
      speciality: "Imagerie MSK avancée",
      level: "expert",
      initials: "FL"
    },
    {
      name: "Dr. Vincent Brun",
      role: "Radiologue Expert",
      institution: "Praticien hospitalier",
      speciality: "Radiologie générale",
      level: "expert",
      initials: "VB"
    },
    {
      name: "Dr. Madeleine Cavet",
      role: "Radiologue Expert",
      institution: "Praticien hospitalier",
      speciality: "Radiologie générale",
      level: "expert",
      initials: "MC"
    },
    {
      name: "Dr. Maud Fournol",
      role: "Radiologue Expert",
      institution: "Praticien hospitalier",
      speciality: "Radiologie générale",
      level: "expert",
      initials: "MF"
    }
  ];

  getExpertStyle(level: ExpertLevel) {
    switch (level) {
      case 'professor':
        return {
          badge: 'bg-amber-500/20 text-amber-300',
          name: 'text-amber-300',
          icon: '🎓'
        };
      case 'chief':
        return {
          badge: 'bg-emerald-500/20 text-emerald-300',
          name: 'text-emerald-300',
          icon: '🏥'
        };
      case 'expert':
        return {
          badge: 'bg-violet-500/20 text-violet-300',
          name: 'text-violet-300',
          icon: '🏆'
        };
      default:
        return {
          badge: 'bg-pulse-500/20 text-pulse-300',
          name: 'text-pulse-300',
          icon: '🩺'
        };
    }
  }


  getExpertLevelText(level: ExpertLevel): string {
    switch (level) {
      case 'professor': return 'Professeur';
      case 'chief': return 'Chef de Service';
      case 'expert': return 'Expert';
      default: return 'Radiologue';
    }
  }
}