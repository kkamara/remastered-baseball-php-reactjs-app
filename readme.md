<img src="https://github.com/kkamara/useful/blob/main/baseball-php-reactjs-app2.png?raw=true" alt="baseball-php-reactjs-app2.png" width=""/>

<img src="https://github.com/kkamara/useful/blob/main/baseball-php-reactjs-app.png?raw=true" alt="baseball-php-reactjs-app.png" width=""/>

# Remastered Baseball PHP Reactjs App [![API](https://github.com/kkamara/php-reactjs-boilerplate/actions/workflows/build.yml/badge.svg)](https://github.com/kkamara/php-reactjs-boilerplate/actions/workflows/build.yml)

(19-Nov-2023) Remastered version. Search Baseball player data in a Reactjs app. A GDPR compliant Laravel 10.x app with Redux.

* [Tinker](#tinker)

* [Using Thunder Client?](#using-thunder-client)

* [Installation](#installation)

* [Usage](#usage)

* [Api Documentation](#api-documentation)

* [Redis Queue](#redis-queue)

* [Unit Tests](#unit-tests)

* [Browser Tests](#browser-tests)

* [Mail server](#mail-server)

* [Misc](#misc)

* [Contributing](#contributing)

* [License](#license)

## Tinker

```bash
php artisan tinker
> $playerList = new App\Models\PlayerList();
> $res = $playerList->getPlayerList();
> $d = json_decode($res, true);
= [
    "statusCode" => 200,
    "body" => [
      [
        "playerID" => "571656",
        "team" => "",
        "longName" => "Buck Farmer",
        "teamID" => "",
      ],
      ...
```

## Using Thunder Client?

[Thunder client](https://www.thunderclient.com/) Visual Studio Code extension.

[thunder-collection_PHP Reactjs Boilerplate.json](https://github.com/kkamara/php-reactjs-boilerplate/blob/main/database/thunder-collection_PHP%20Reactjs%20Boilerplate.json)

## Installation
* [https://laravel.com/docs/10.x/installation](https://laravel.com/docs/10.x/installation)
* [https://laravel.com/docs/10.x/mix#main-content](https://laravel.com/docs/10.x/mix#main-content)

```bash
# Create our environment file.
cp .env.example .env
```

```bash
# Install our app dependencies.
composer i
# Using Docker?
make dev && make backend-migrate
# Not using Docker?
php artisan key:generate
php artisan migrate --seed
npm install
npm run build
```

## Usage

* [https://github.com/kkamara/laravel-makefile](https://github.com/kkamara/laravel-makefile)
* [https://laravel.com/docs/10.x/sail#main-content](https://laravel.com/docs/10.x/sail#main-content)

```bash
php artisan serve --port=3000
```

## Api Documentation

```bash
php artisan route:list
# output
...
POST       api/user ............................ login › Api\UserController@login
GET|HEAD   api/user/authorize .................. Api\UserController@authorizeUser
POST       api/user/register ................... Api\UserController@register
...
```

View the api collection [here](https://documenter.getpostman.com/view/17125932/TzzAKvVe).

## Redis Queue

You can test the `/job` endpoint to invoke a job example you can then view at 

```bash
alias sail='vendor/bin/sail'
sail artisan queue:listen redis --queue stuff
# output
[2022-04-16 13:30:17][KttOLxAyP6mnsNGScDLbKAgvxpJ7M0AA] Processing: App\Jobs\TestJob
[2022-04-16 13:30:17][KttOLxAyP6mnsNGScDLbKAgvxpJ7M0AA] Processed:  App\Jobs\TestJob
```

## Unit Tests

```bash
php artisan test --filter api
```

View the unit test code [here](https://raw.githubusercontent.com/kkamara/php-reactjs-boilerplate/main/tests/Unit/Api/UsersTest.php).

## Browser Tests

```bash
alias sail='vendor/bin/sail'
sail dusk
```

## Mail Server

You can test the `/mail` endpoint to send a test mail you can then view at `:8025/`.

![docker-mailhog3.png](https://raw.githubusercontent.com/kkamara/useful/main/docker-mailhog3.png)

Mail environment credentials are at [.env](https://raw.githubusercontent.com/kkamara/php-reactjs-boilerplate/main/.env.example).

The [mailhog](https://github.com/mailhog/MailHog) docker image runs at `http://localhost:8025`.

## Misc

[See PHP Docker Skeleton.](https://github.com/kkamara/php-docker-skeleton)

[See Laravel 10 API 3.](https://github.com/kkamara/laravel-10-api-3)

[See movies app.](https://github.com/kkamara/movies)

[See food nutrition facts search web app.](https://github.com/kkamara/food-nutrition-facts-search-web-app)

[See ecommerce web.](https://github.com/kkamara/ecommerce-web)

[See city maps mobile.](https://github.com/kkamara/city-maps-mobile)

[See ecommerce mobile.](https://github.com/kkamara/ecommerce-mobile)

[See crm.](https://github.com/kkamara/crm)

[See birthday currency.](https://github.com/kkamara/birthday-currency)

[See php scraper.](https://github.com/kkamara/php-scraper)

[See amazon scraper.](https://github.com/kkamara/amazon-scraper)

[See python amazon scraper 2.](https://github.com/kkamara/selenium-py)

[See wordpress with docker support.](https://github.com/kkamara/wordpress)

The `Makefile` for this project contains useful commands for a Laravel application and can be found at [laravel-makefile](https://github.com/kkamara/laravel-makefile).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)
