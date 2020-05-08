no faker do estagiO E CONVEnio, garantir que a empresa existe antes

https://github.com/laravelha/generator
https://github.com/appzcoder/crud-generator/blob/master/doc/usage.md

gates, permissins, roles

loginController

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



