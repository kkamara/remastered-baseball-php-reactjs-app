<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Traits\Tappable;
use Illuminate\Support\Facades\Log;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Client;

class PlayerList extends Model
{
    use HasFactory;
    use Tappable;

    public function getPlayerList() {
        try {
            $client = new Client();

            $response = $client->request(
                'GET', 
                'https://'.config("app.rapid_api_host").'/getMLBPlayerList', 
                ['headers' => [
                        'X-RapidAPI-Host' => config("app.rapid_api_host"),
                        'X-RapidAPI-Key' => config("app.rapid_api_key"),
                ]]
            );

            return $response->getBody();
        } catch (RequestException $exception) {
            Log::error($exception->getMessage());
            return false;
        }
    }
}
