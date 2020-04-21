00 - Criar rotas para edição:

    Route::get('pareceristas/{parecerista}', 'PareceristaController@edit');
    Route::patch('pareceristas/{parecerista}', 'PareceristaController@update');

00 - No formulário de edição lembrar de:

    @csrf
    @method('patch')

00 - Estamos duplicando nosso formulário! why not?

    <input class="input" type="text" name="name" value="{{old('name',
    $profile->name)}}">
