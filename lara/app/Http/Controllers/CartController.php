<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
      public function addToCart(Request $request)
    {
        // Логика добавления товара в корзину (в сессию)
        $productId = $request->input('product_id');
        $product = Product::find($productId);

        // Добавим товар в сессию
        $cart = session()->get('cart');
        $cart[$productId] = $product;
        session()->put('cart', $cart);

        return redirect()->route('cart.show')->with('success', 'Товар успешно добавлен в корзину');
    }

    public function showCart()
    {
        $cart = session()->get('cart', []);

        return view('cart.offcanvas', compact('cart'));
    }
}
