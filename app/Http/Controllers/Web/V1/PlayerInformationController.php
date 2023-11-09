<?php

namespace App\Http\Controllers\Web\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PlayerInformation;

class PlayerInformationController extends Controller
{
    public function __construct(
        protected PlayerInformation $playerInformation = new PlayerInformation()
    ) {
        $this->middleware('auth:sanctum');
    }

    public function getPlayerInformation(Request $request) {
        $data = json_decode(
            $this->playerInformation->getPlayerInformation(
                $request->input("playerId")
            ), 
            true
        );
        return compact("data");
    }
}
