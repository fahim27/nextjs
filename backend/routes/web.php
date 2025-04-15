<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;


// header("Access-Control-Allow-Origin: *");

// Route::get('/product/index', [ProductController::class, 'index'])->name('product.index');
// Route::get('/product/create', [ProductController::class, 'create'])->name('product.create');
// Route::post('/product/store', [ProductController::class, 'store'])->name('product.store');
// Route::get('/product/edit/{id}', [ProductController::class, 'edit'])->name('product.edit');
// Route::put('/product/update/{id}', [ProductController::class, 'update'])->name('product.update');
// Route::delete('/product/destroy/{id}', [ProductController::class, 'destroy'])->name('product.destroy');

// Route::prefix('product')->controller(ProductController::class)->name('product.')->group(function () {
//     Route::get('index', 'index')->name('index');
//     Route::get('create', 'create')->name('create');
//     Route::post('store', 'store')->name('store');
//     Route::get('edit/{id}', 'edit')->name('edit');
//     Route::put('update/{id}', 'update')->name('update');
//     Route::delete('destroy/{id}', 'destroy')->name('destroy');
// });

Route::resource('product', ProductController::class);

Route::get('posts', function () {
    return response()->json([
        'success' => true,
        'posts'  => \App\Models\Post::get()
    ]);
});

Route::get('/login', function () {
    return response()->json([
        'success' => true,
        'message' => "Login Required",
    ], 401);
})->name('login');


Route::get('/', function () {
    return to_route('product.index');
});
