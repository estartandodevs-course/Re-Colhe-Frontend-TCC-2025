import api from './api';
import type { Location } from '../types/locations';

type PevFromApi = {
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

type FavoriteFromApi = {
  pevId: number;
  nome: string;
  endereco: string;
};

type UserDataFromApi = {
  usuarioId: number;
  pevsFavoritos: FavoriteFromApi[];
};

export async function getFavorites(usuarioId: number): Promise<Location[]> {
  try {
    const userResponse = await api.get(`/api/v1/Usuarios/${usuarioId}`);
    const userData: UserDataFromApi = userResponse.data;

    if (!userData.pevsFavoritos || userData.pevsFavoritos.length === 0) {
      return [];
    }

    const favoriteIds = userData.pevsFavoritos.map(fav => fav.pevId);

    const pevsResponse = await api.get('/api/v1/pevs');
    const allPevs: PevFromApi[] = pevsResponse.data.pevs;

    const favoritePevs = allPevs.filter((pev: PevFromApi) => 
      favoriteIds.includes(pev.pevId)
    );

    return favoritePevs.map((pev: PevFromApi) => ({
      id: pev.pevId,
      name: pev.nome,
      address: pev.endereco,
      openTime: pev.openTime,
      closeTime: pev.closeTime,
      openingDays: pev.openingDays,
      phone: pev.telefone,
      materials: pev.materiais.map((m: string) => m.toLowerCase()),
      position: pev.posicao
    }));

  } catch {
    return [];
  }
}

export async function addFavorite(usuarioId: number, pevId: number): Promise<boolean> {
  try {
    await api.post(`/api/v1/pevs/${pevId}/favoritar`, {
      usuarioId: usuarioId
    });
    return true;
  } catch {
    return false;
  }
}

export async function removeFavorite(usuarioId: number, pevId: number): Promise<boolean> {
  try {
    await api.delete(`/api/v1/pevs/${pevId}/favoritar/${usuarioId}`);
    return true;
  } catch {
    return false;
  }
}

export async function isFavorite(usuarioId: number, pevId: number): Promise<boolean> {
  try {
    const favorites = await getFavorites(usuarioId);
    return favorites.some(fav => fav.id === pevId);
  } catch {
    return false;
  }
}

export async function toggleFavorite(usuarioId: number, location: Location): Promise<boolean> {
  try {
    const currentlyFavorite = await isFavorite(usuarioId, location.id);
    
    if (currentlyFavorite) {
      return await removeFavorite(usuarioId, location.id);
    } else {
      return await addFavorite(usuarioId, location.id);
    }
  } catch {
    return false;
  }
}