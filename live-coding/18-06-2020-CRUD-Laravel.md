Data: 18/06/2020 - 14h-18h

Escopo: Desenvolvimento de um sistema para cadastro de ocorrências nas
portarias dos prédios. A ocorrência pode envolver ou não movimentação
de equipamentos.

Etapas:

1 - (Victor): Criação do projeto Portarias no laravel com composer. Criação do banco
de dados, inserção no .env, rodar primeira migration. Inicializar projeto
no git.

2 - (Thiago): Criação de model, controler, seed, factory para Ocorrencia

3 - (Augusto): Inserir campos na migrations de ocorrência: patrimonio (opcional),
numero_serie (opcional), tipo (entrada, saida, registro), comentario, user_id, data_ocorrencia

4 - (Ricardo):  Inserir campos na migrations de users: vigia_id(opcional), codpes(opcional),
deixar senha opicional.

5 - (Marisa): Criar um usuário com vigia_id usando Seed. 

6 - (Marcos): Criar uma ocorrencia usando Seed.

7 - (Laura): Criar factory para users e para ocorrencias

8 - (Gabriel): Criar index (blade e controller) para ocorrências, com busca por data e paginação

9 - (Arthur): Validar a data busca - pode iusar uma lib externa

10 - (Victor): Instalação do template USP theme

11 - (Gabriela): Criar o formulário de cadastro e persistência de ocorrências - tratar a data da ocorrência com gets/sets

12 - (Marcos): Validação com FormRequest da ocorrência

13 - (Gabriel): show e edição de ocorrências

14 - (Gabriela): deleção de ocorrências

15 - (Laura): Cadastro (blade, rota, controller) de vigia

16 - (Marisa): Editar vigia

17 - (Victor): Listar vigias com busca por código do vigia. Show vigia, mostrando as ocorrências que ele cadastrou

18 - (Augusto): Criação do login do vigia (rota, form, controller)

19 - (Ricardo): Instalação do senha única e mapeamento com usuário do laravel. 

20 - (Victor): Definição de permissões usando ServiceProvider: admin e vigia

21 - (Thiago): Aplicar papéis nos controllers