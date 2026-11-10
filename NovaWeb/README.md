# PAUTA — Agenda pessoal Campo Sereno (SA02)

Front-end de uma agenda de compromissos de uma colaboradora de uma empresa de alimentos fictícia (Campo Sereno): **login**, **perfil** e **consulta** com tabela e busca que filtra. Projeto individual da Situação de Aprendizagem 02, feito só com HTML, CSS externo e JavaScript.

- **Autora:** Raquel S.R. Duarte
- **Status:** em desenvolvimento. HTML das 3 páginas pronto (10/11/2026); CSS e JavaScript em andamento.

## Andamento
| Etapa | Situação |
|---|---|
| Fundos em WebP | feito |
| Estrutura HTML das 3 páginas | feito |
| CSS base, login, perfil e consulta | a fazer |
| Responsivo (celular, `@media`) | a fazer |
| JavaScript (login, sessão, editar perfil, validação) | a fazer |
| Publicação no GitHub Pages | a fazer |

## Telas
1. **Login** (`index.html`): e-mail, senha, "Lembrar-me", botão Entrar, mensagem de erro (escondida até precisar) e bloco de demonstração.
2. **Perfil** (`perfil.html`): menu, dados da colaboradora, formulário de edição com campos preenchidos e bloqueados (botões Salvar e Cancelar escondidos até clicar em Editar perfil) e próximos compromissos.
3. **Consulta** (`consulta.html`): menu, campo de busca, contador e tabela com 10 compromissos (Data, Horário, Assunto, Local e Tipo).

## Protótipo (Figma)
Imagens em `docs/prototipo-v2/`: login, perfil e consulta no desktop (1440 × 900) e no celular (390 × 844).

## Como abrir
Abra `index.html` no navegador. Login de demonstração: `helena.prado@camposereno.com` / `agenda123`.

## Estrutura
```
index.html  perfil.html  consulta.html
css/style.css
js/app.js
imagens/        fundos em WebP
docs/           protótipo e decisões
```

## Imagens
| Arquivo | Dimensão | Formato | Peso |
|---|---|---|---|
| `imagens/fundo-desktop.webp` | 1920 × 1080 | WebP | 6 KB (PNG original: 52 KB) |
| `imagens/fundo-celular.webp` | 1080 × 1920 | WebP | 6 KB (PNG original: 59 KB) |

## Decisões
Registradas em `docs/decisoes.md`.
