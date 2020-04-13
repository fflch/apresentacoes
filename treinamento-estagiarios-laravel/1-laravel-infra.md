0. habilitar virtualização (vt-x) na BIOS da sua máquina

1. Instale o virtualbox: https://www.virtualbox.org/wiki/Downloads

2. Baixar debian netinstall:

http://sft.if.usp.br/debian-cd/10.3.0/amd64/iso-cd/
http://sft.if.usp.br/debian-cd/10.3.0/amd64/iso-cd/debian-10.3.0-amd64-netinst.iso

3. Criar VM no virtualbox, iniciá-la e instalar o debian (vou usar o mate)

4. Comandos básicos:

    pwd, cd .. , ls, mv, mkdir

4. Transforme seu usuário em sudo:

    su root
    /sbin/addgroup thiago sudo

5. Editor textos: pluma, gedit, vim, vscode, sublime, atom, nano...
Instalação de softwares via binário:

    sudo apt install ./vscode.deb

6. Instalar mariadb

    sudo apt install mariadb-server

7. Instalar e configurar git

    sudo apt install git
    git config --global user.name "Thiago Gomes Veríssimo"
    git config --global user.email "verissimotgv@gmail.com"

Criar conta no github e criar um repositório: aprendi-git.
Configurar chave ssh no github:

    ssh-keygen
    cat ~/.ssh/id_rsa.pub

8. Criando usuário admin para uso geral:

    sudo mariadb
    GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%'  IDENTIFIED BY 'admin' WITH GRANT OPTION;
    quit
    exit

9. Instalar dependências mínimas do php para o laravel:

     sudo apt install php-xml php-intl php-mbstring php-mysql

10. Instalar o composer:

    curl -s https://getcomposer.org/installer | php
    sudo mv composer.phar /usr/local/bin/composer

11. Criar um projeto no laravel:

    composer create-project laravel/laravel meu-app
    cd meu-app
    php artisan serve

12. Rodar a migration para verificar se a conexação com o banco tá ok:

    mysql -uadmin -padmin
    > create database exemplo_laravel;
    > quit

Editar .env e configura mysql, depois:

    php artisan migrate

