<?php

use App\Http\Controllers\Dashboard\AccountController;
use App\Http\Controllers\Dashboard\CategoryController;
use Illuminate\Support\Facades\Route;

Route::prefix('/dashboard')->middleware(['auth', 'verified'])->group(function () {
    Route::redirect('/', '/dashboard/overview')->name('dashboard');

    Route::get('/overview', fn () => inertia('dashboard/overview'));

    Route::prefix('/accounts')->group(function () {
        Route::get('/', [AccountController::class, 'index'])->name('dashboard.accounts.index');

        Route::post('/', [AccountController::class, 'store'])->name('dashboard.accounts.store');

        Route::patch('/{account}', [AccountController::class, 'update'])->name('dashboard.accounts.update');

        Route::delete('/{account}', [AccountController::class, 'destroy'])->name('dashboard.accounts.destroy');
        Route::delete('/', [AccountController::class, 'destroys'])->name('dashboard.accounts.destroys');
    });

    Route::prefix('/categories')->group(function () {
        Route::get('/', [CategoryController::class, 'index'])->name('dashboard.categories.index');

        Route::post('/', [CategoryController::class, 'store'])->name('dashboard.categories.store');

        Route::patch('/{account}', [CategoryController::class, 'update'])->name('dashboard.categories.update');

        Route::delete('/{account}', [CategoryController::class, 'destroy'])->name('dashboard.categories.destroy');
        Route::delete('/', [CategoryController::class, 'destroys'])->name('dashboard.categories.destroys');
    });

});
