export type Solicitacao = {
  id: string;
  titulo: string;
  data: string;
  pendencia: string;
  pendenciaAlt: string;
  imagem: string;
  apoio?: number;
};

// Coletas
export const solicitacoesColetaMorador: Solicitacao[] = [
  { id: "1m", titulo: "Lixo não foi coletado", data: new Date().toLocaleDateString("pt-BR"), pendencia: "Pendente", pendenciaAlt: "pendente", imagem: "red", apoio: 32  },
  { id: "2m", titulo: "Ponto de coleta cheio", data: new Date().toLocaleDateString("pt-BR"), pendencia: "Em andamento", pendenciaAlt: "Em andamento", imagem: "yellow", apoio: 16  },
  { id: "3m", titulo: "Solicitação de coleta", data: new Date().toLocaleDateString("pt-BR"), pendencia: "Concluído", pendenciaAlt: "Concluído", imagem: "green", apoio: 1 },
];

export const solicitacoesColetaEmpresa: Solicitacao[] = [
  { id: "1e", titulo: "Capacidade dos pontos.", data: new Date().toLocaleDateString("pt-BR"), pendencia: "Pendente", pendenciaAlt: "pendente", imagem: "red"  },
  { id: "2e", titulo: "Atraso na coleta.", data: new Date().toLocaleDateString("pt-BR"), pendencia: "Em andamento", pendenciaAlt: "Em andamento", imagem: "yellow"  },
  { id: "3e", titulo: "Solicitação coleta", data: new Date().toLocaleDateString("pt-BR"), pendencia: "Concluído", pendenciaAlt: "Concluído", imagem: "green"  },
];

// Campanhas
export const solicitacoesCampanhaMorador: Solicitacao[] = [
  { id: "1cm", titulo: "Nova campanha!", data: new Date().toLocaleDateString("pt-BR"), pendencia: "Pendente", pendenciaAlt: "pendente", imagem: "red", apoio: 1  },
];

export const solicitacoesCampanhaEmpresa: Solicitacao[] = [
  { id: "1ce", titulo: "Nova campanha!", data: new Date().toLocaleDateString("pt-BR"), pendencia: "Pendente", pendenciaAlt: "pendente", imagem: "red"  },
];

// Avisos
export const solicitacoesAvisoMorador: Solicitacao[] = [];
export const solicitacoesAvisoEmpresa: Solicitacao[] = [];