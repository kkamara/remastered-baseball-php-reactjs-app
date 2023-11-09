<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Traits\Tappable;
use Illuminate\Support\Facades\Log;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Client;

class PlayerInformation extends Model
{
    use HasFactory;
    use Tappable;

    public function getPlayerInformation(string $playerId) {
        try {
            $client = new Client();

            $response = $client->request(
                'GET', 
                'https://'.config("app.rapid_api_host").'/getMLBPlayerInfo?getStats=false&playerID='.$playerId, 
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
