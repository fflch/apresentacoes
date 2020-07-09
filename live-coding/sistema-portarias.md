Escopo: Desenvolvimento de um sistema para cadastro de ocorrências nas
portarias dos prédios. A ocorrência pode envolver ou não movimentação
de equipamentos.

# 1. Encontro - 18/06/2020
https://youtu.be/z0T4PyHRkPE

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

# 2. Encontro - 25/06/2020 
https://youtu.be/68fKrI5Qry8

1 - (Gabriela): Criar o formulário de cadastro e persistência de ocorrências - tratar a data da ocorrência com gets/sets

2 - (Arthur): Formulário e persistência das edições das ocorrências

3 - (Victor): Mostrar ocorrência, show.blade.php

# 3. Encontro - 02/07/2020
https://youtu.be/FZF-AQISfGg

1 - (Augusto): Opção para deletar ocorrência

2 - (Ricardo): Implementação do template USP theme. Mostrar mensagem de flash com classes do bootstrap. Uso do datepicker do bootstrap.

3 - (Laura): Validação com FormRequest da ocorrência na criação e edição

# 4. Encontro - 09/07/2020
https://youtu.be/vgMkBewEG20

1 - (Laura): Terminar validação com FormRequest da ocorrência na criação e edição

2 - (Marisa): Validação do campo tipo - lista de opções permitidas

3 - (Gabriel): Validar a data de busca - pode usar uma lib externa (composer require laravellegends/pt-br-validator).
Por que não usamos formRequest aqui?

4 - (Marcos) implementar busca por tipo de ocorrência

# próximos encontros 

 - Implementação de foreignKey para usuário no model de ocorrência - corrigir migration

 - Cadastro (blade, rota, controller) de vigia

 - Editar vigia

 - Listar vigias com busca por código do vigia. Show vigia, mostrando as ocorrências que ele cadastrou

 - Criação do login do vigia (rota, form, controller)

 - Instalação do senha única e mapeamento com usuário do laravel. 
 - Definição de permissões usando ServiceProvider: admin e vigia

 -  Aplicar papéis nos controllers
