<?php

namespace App\Http\Controllers;
use App\Models\Product;
// use Illuminate\Support\Facades\Log;

use Illuminate\Http\Request;

class BasketController extends Controller
{
      public function addToCart(Request $request) {
        // Логика добавления товара в корзину 
        $productId = $request->input('product_id');
        $product = Product::find($productId);

           if (!$product) {
    return response()->json(['error' => 'Product not found'], 404);
      }

        // Добавляю товар в сессию
        // $cart = session()->get('cart');

          $cart = [];

    // Получаю текущую корзину из сессии, если она есть
    if (session()->has('cart')) {
        $cart = session()->get('cart');
    }
            // $cart = session()->has('cart') ? session()->get('cart') : [];


        $cart[$productId] = $product;

        session()->put('cart', $cart);

        return response()->json(session()->get('cart'));
        // dd(session()->get('cart'));
        //    dd($cart);

        return response()->json(['message' => 'Товар успешно добавлен в корзину', 'cart' => $cart]);
    }

    public function showCart()
    {
        $cart = session()->get('cart', []);
        dd(session()->all());
 return response()->json(['cart' => $cart]);
    }
}
