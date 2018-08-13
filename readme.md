# Phonebook

This is a simple Phonebook based on Laravel 5.6 / Vue Js / Bulma

## Installation

### Server Requirements
######You will need to make sure your server meets the following requirements:

* PHP >= 7.1.3
* OpenSSL PHP Extension 
* PDO PHP Extension
* Mbstring PHP Extension
* Tokenizer PHP Extension
* XML PHP Extension
* Ctype PHP Extension 
* JSON PHP Extension
* MySQL >= 5.6

### Step 1

Begin by cloning this repository to your machine, and installing all Composer dependencies.

```bash
git clone https://github.com/pedrozebra/laravel_vue.git
cd laravel_vue
composer install
npm install
cp .env.example .env
rm .env.example
```
Edit `.env` file and set database access variables

* DB_CONNECTION=mysql
* DB_HOST=your_host
* DB_PORT=3306
* DB_DATABASE=your_db_name
* DB_USERNAME=your_db_username
* DB_PASSWORD=your_db_password

Create your own database and launch migrations & seed

```bash
php artisan migrate
```

This command generate your own schema details

### Step 2

Next: generate the application key
```bash
php artisan key:generate
```

### Step 3
There's no need to configure anything to run the application. 
Just execute this command to run the built-in web server and access the application in your browser at `http://127.0.0.1:8000`
```bash
php artisan serve
```