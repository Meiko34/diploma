<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContactResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
          return [ 

            'id' => $this->id, 

            'telephone' => $this->telephone, 

            'address' => $this->address, 

            'email' => $this->email, 

            'operating_mode' => $this->operating_mode, 

            'questions_about_orders' => $this->questions_about_orders, 

            'legal_name' => $this->legal_name, 

        ]; 
    }
}
