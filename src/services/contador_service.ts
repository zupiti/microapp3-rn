import {ensureHttpClientConfigured, httpClient} from 'shared-rn';
import type {ContadorSessao} from '../entities';

/**
 * HTTP / transport layer (`services/`).
 * Uses shared-rn request core — never raw fetch here.
 */
export class ContadorService {
  static async getContadorPayload(): Promise<unknown> {
    ensureHttpClientConfigured();
    const response = await httpClient.get<unknown>('/contador');
    return response.data;
  }

  static async postContadorValor(valor: number): Promise<ContadorSessao> {
    ensureHttpClientConfigured();
    const response = await httpClient.post<ContadorSessao>('/contador', {
      valor,
    });
    return response.data;
  }
}
