export type ExpertLevel = 'professor' | 'chief' | 'expert' | 'doctor';

export interface Expert {
  name: string;
  role: string;
  institution: string;
  speciality: string;
  level: ExpertLevel;
  initials: string;
}
