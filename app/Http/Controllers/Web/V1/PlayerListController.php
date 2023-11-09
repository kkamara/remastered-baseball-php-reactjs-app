<?php

namespace App\Http\Controllers\Web\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PlayerList;

class PlayerListController extends Controller
{
    public function __construct(
        protected PlayerList $playerList = new PlayerList()
    ) {
        $this->middleware('auth:sanctum');
    }

    public function getPlayerList(Request $request) {
        $data = json_decode(
            $this->playerList->getPlayerList(), 
            true
        );
        return compact("data");
    }
}
