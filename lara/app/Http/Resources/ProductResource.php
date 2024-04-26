<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
               'img' => $this->img,
               'name' => $this->name,
                'country' => $this->country,
               'price' => $this->price,
               'cooking_method' => $this->cooking_method,

               'description' => $this->description,
               'variety' => $this->variety,
               'collections' => $this->collections,
               'created_at' => $this->created_at, 
        ];
    }
}
