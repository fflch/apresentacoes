Comentários: Levantamento dos requisitos de um sistema, no
caso controle de estágios externos da FFLCH.

Na parte 3, muito mais conceitual, vamos:

 - persistir os dados no banco de dados
 - validar a entrada
 - criar formulário de edição
 - criar visualização do conteúdo criado (show)
 - criar visualização dos conteúdos criados em lista (index)

1 - apontado seu repositório para o principal (remote):

    cd estagios
    git remote add upstream git@github.com:fflch/estagios.git

2 - Atualizando seu projeto com o principal:

    git remote update
    git merge upstream/master
    composer install

3 - Comentários gerais sobre os formulários:

 - Thiago: remover nome
 - Gabriel: Início do Estágio/Término do Estágio podem ser input text
 - Laura
 - Victor
 - Marisa
 - Marcos

Daqui em diante, reproduzir no seu contexto

4 - Criação do Request e usá-lo no seu controller:

    php artisan make:request PareceristaRequest

5 - Validação no método rules() do PareceristaRequest.php:

    return [
        'NomeDoCampo1' => 'required',
        'NomeDoCampo2' => 'required',
    ];

No controller:

    $validated = $request->validated();

6 - Mostrar mensagens de erros de validação:

    @include('flash')

7 - Criar banco de dados e colocar no .env

6 - criar model e migration:

    php artisan make:model -m Parecerista

7 - Salvar no banco dados, store!

8 - Criar rotas para edição:

    Route::get('pareceristas/{parecerista}', 'PareceristaController@edit');
    Route::patch('pareceristas/{parecerista}', 'PareceristaController@update');

9 - No formulário de edição lembrar de:

    @csrf
    @method('patch')

10 - Estamos duplicando nosso formulário! why not?

    <input class="input" type="text" name="name" value="{{old('name',
    $profile->name)}}">

11 - Criar página de index e show

##
Gabriela e Arthur - Construção dos PDFs

1 - Criar rota para pdf

2 - Criar método no Controller PDFsController:

    public function termo(){
        $pdf = PDF::loadView('pdfs.termo');
        return $pdf->download('termo.pdf');
    }

3 - criar template do pdf em pdfs/termo.blade.php:

    @extends('pdfs.fflch')
      Seu trabalho aqui
    @endsection('content')



