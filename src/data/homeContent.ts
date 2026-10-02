export type Audience = {
  id: "empresas" | "profissionais";
  eyebrow: string;
  title: string;
  description: string;
  action: string;
};

export const homeContent = {
  navigation: [
    { label: "Cooperativa", href: "#cooperativa" },
    { label: "Para empresas", href: "#empresas" },
    { label: "Para profissionais", href: "#profissionais" },
    { label: "Como funciona", href: "#como-funciona" },
  ],
  hero: {
    eyebrow: "Cooperativa de pessoas, hospitalidade e movimento",
    title: ["Pessoas certas.", "Operações que", "acontecem."],
    description:
      "Conectamos profissionais e empresas para movimentar bares, restaurantes e eventos com mais organização, oportunidade e confiança.",
  },
  audiences: [
    {
      id: "empresas",
      eyebrow: "Para empresas",
      title: "Monte a equipe que sua operação precisa.",
      description: "Bares, restaurantes, eventos e operações de hospitalidade com gente preparada para fazer acontecer.",
      action: "Encontrar profissionais",
    },
    {
      id: "profissionais",
      eyebrow: "Para profissionais",
      title: "Seu trabalho encontra novas oportunidades.",
      description: "Participação, cooperação e desenvolvimento para quem faz a hospitalidade acontecer todos os dias.",
      action: "Quero fazer parte",
    },
  ] satisfies Audience[],
  roles: ["Garçons", "Bartenders", "Cozinha", "Auxiliares", "Recepção", "Eventos", "Hospitalidade"],
  steps: {
    empresas: ["Conte sua necessidade", "A Coolaborativa organiza a demanda", "Profissionais entram em operação"],
    profissionais: ["Faça seu cadastro", "Complete seu perfil", "Acesse oportunidades"],
  },
};