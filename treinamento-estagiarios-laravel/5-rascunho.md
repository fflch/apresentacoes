dados de conexão com repliciado no .env

faker replicado: docente() e graduacao();

faker pt-br, não precisa do provider, já tem na lib default

@inject

trocar fillable para protected

get and set no models

card-body

paginação

https://symfony.com/doc/current/workflow.html

Máquina de estado:

 - https://github.com/zerodahero/laravel-workflow (que vou usar)
 - https://github.com/spatie/laravel-model-states
 - https://github.com/sebdesign/laravel-state-machine
 - https://github.com/iben12/laravel-statable
 - https://github.com/brexis/laravel-workflow

Sem máquina de estados:

 - https://github.com/spatie/laravel-model-status
 - https://github.com/makeabledk/laravel-eloquent-status
 
Instalar http://www.graphviz.org/

sudo apt-get install graphviz

    config/workflow.php -> definir estados e transições

Gerar figura:

    php artisan workflow:dump -v workflow_estagio --class=App\\Estagio

No model:

    use ZeroDaHero\LaravelWorkflow\Traits\WorkflowTrait;

    class Estagio extends Model {
    use WorkflowTrait;

No controller

... falta fazer


filtros, index.blade.php,

gates, permissins, roles

loginController
