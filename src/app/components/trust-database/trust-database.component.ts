import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataStat, TrustFeature } from '../../models/trust-database.model';

@Component({
  selector: 'app-trust-database',
  templateUrl: './trust-database.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class TrustDatabaseComponent {
  dataStats: DataStat[] = [
    { number: "6 500 000", label: "Images radiologiques annotées", description: "Base d'apprentissage validée par experts", delay: "0.1s" },
    { number: "66 000", label: "Cas cliniques documentés", description: "Validés par des experts en radiologie", delay: "0.2s" },
    { number: "2 200", label: "Cours professionnels", description: "Formation continue et mise à jour", delay: "0.3s" },
    { number: "500+", label: "Modèles de CR", description: "Comptes-rendus et consultations types", delay: "0.4s" },
    { number: "500", label: "Radiologues utilisateurs", description: "Communauté active et croissante", delay: "0.5s" },
  ];

  trustFeatures: TrustFeature[] = [
    { title: "Sécurité & Confidentialité maximales", description: "Hébergement HDS certifié, chiffrement bout-en-bout, conformité RGPD stricte et audit de sécurité continu" },
    { title: "Label \"Garantie Humaine\"", description: "Contrôle humain systématique, transparence des algorithmes et validation médicale de chaque suggestion" },
    { title: "Précision clinique validée", description: "95% de précision sur cohortes multi-centriques, algorithmes entraînés sur données françaises exclusivement" },
    { title: "Développement collaboratif", description: "Co-créé avec 500 radiologues utilisateurs, retours d'expérience intégrés quotidiennement" },
    { title: "Mise à jour & Veille continue", description: "Base enrichie quotidiennement, veille bibliographique automatisée et intégration des dernières recommandations" },
    {title: "Conformité réglementaire", description: "Conformité dispositif médical et respect des standards internationaux" },
  ];
}
