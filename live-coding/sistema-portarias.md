Escopo: Desenvolvimento de um sistema para cadastro de ocorrências nas
portarias dos prédios. A ocorrência pode envolver ou não movimentação
de equipamentos.

# 1. Encontro - 18/06/2020 - 14h-18h
https://youtu.be/z0T4PyHRkPE

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

# 2. Encontro - 25/06/2020 - 14h-18h
https://youtu.be/68fKrI5Qry8

1 - (Gabriela): Criar o formulário de cadastro e persistência de ocorrências - tratar a data da ocorrência com gets/sets

2 - (Arthur): Formulário e persistência das edições das ocorrências

3 - (Victor): Mostrar ocorrência, show.blade.php

# 3. Encontro

4 - (Augusto): Opção para deletar ocorrência

5 - (Ricardo): Implementação do template USP theme. Mostrar mensagem de flash com classes do bootstrap. Uso do datepicker do bootstrap.

6 - (Laura): Validação com FormRequest da ocorrência na criação e edição

7 - (Marisa): Validação do campo tipo;

8 - (Marcos): Validar a data de busca - pode usar uma lib externa (composer require laravellegends/pt-br-validator).
Por que não usamos formRequest aqui?

9 - (Gabriel): Implementação de foreignKey para usuário no model de ocorrência - corrigir migration



15 - Cadastro (blade, rota, controller) de vigia

16 - Editar vigia

17 - Listar vigias com busca por código do vigia. Show vigia, mostrando as ocorrências que ele cadastrou

18 - Criação do login do vigia (rota, form, controller)

19 - Instalação do senha única e mapeamento com usuário do laravel. 

20 - Definição de permissões usando ServiceProvider: admin e vigia

21 -  Aplicar papéis nos controllers