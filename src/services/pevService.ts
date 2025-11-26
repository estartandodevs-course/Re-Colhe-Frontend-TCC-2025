import api from './api';
import type { Location } from '../types/locations';

type PevResponse = {
  pevId: number;
  nome: string;
  endereco: string;
  telefone: string;
  openTime: string;
  closeTime: string;
  openingDays: string;
  materiais: string[];
  posicao: [number, number];
};

export async function getPevs(): Promise<Location[]> {
  try {
    const response = await api.get('/api/v1/pevs');
    const pevs: PevResponse[] = response.data.pevs;

    return pevs.map(pev => ({
      id: pev.pevId,
      name: pev.nome,
      address: pev.endereco,
      openTime: pev.openTime,
      closeTime: pev.closeTime,
      openingDays: pev.openingDays,
      phone: pev.telefone,
      materials: pev.materiais.map(m => m.toLowerCase()),
      position: pev.posicao
    }));
  } catch {
    return [];
  }
}