<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = $request->user()->categories();

        $categories = $query->limit(Category::LIMIT)->get();

        return inertia('dashboard/categories', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['string', 'required', 'max:255'],
        ]);

        $query = $request->user()->categories();

        if ($query->count() >= Category::LIMIT) {
            return redirect()->back()->with('error', 'You have reached the maximum limit of '.Category::LIMIT.' categories.');
        }

        /**
         * @var Category $category
         */
        $category = $query->create($validated);

        return redirect()->back()->with('success', "'{$category->name}' category created successfully");
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        Gate::allowIf(fn (User $user) => $user->id === $category->user_id);

        $validated = $request->validate([
            'name' => ['string', 'required', 'max:255'],
        ]);

        $category->update($validated);

        return redirect()->back()->with('success', "'{$category->name}' category updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        Gate::allowIf(fn (User $user) => $user->id === $category->user_id);

        $category->delete();

        return redirect()->back()->with('success', 'Category deleted successfully');
    }

    /**
     * Remove the batch resources from storage.
     */
    public function destroys(Request $request)
    {
        $validated = $request->validate([
            'ids' => ['array', 'required'],
            'ids.*' => ['string', 'required', 'exists:categories,id'],
        ]);

        $query = $request->user()->categories();

        $query->whereIn('id', $validated['ids'])->delete();

        return redirect()->back()->with('success', 'Categories deleted successfully');
    }
}
