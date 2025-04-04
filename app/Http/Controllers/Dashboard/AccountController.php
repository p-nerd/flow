<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = $request->user()->accounts();

        $accounts = $query->limit(Account::LIMIT)->get();

        return inertia('dashboard/accounts', [
            'accounts' => $accounts,
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

        $query = $request->user()->accounts();

        if ($query->count() >= Account::LIMIT) {
            return redirect()->back()->with('error', 'You have reached the maximum limit of '.Account::LIMIT.' accounts.');
        }

        /**
         * @var Account $account
         */
        $account = $query->create($validated);

        return redirect()->back()->with('success', "'{$account->name}' account created successfully");
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Account $account)
    {
        Gate::allowIf(fn (User $user) => $user->id === $account->user_id);

        $validated = $request->validate([
            'name' => ['string', 'required', 'max:255'],
        ]);

        $account->update($validated);

        return redirect()->back()->with('success', "'{$account->name}' account updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Account $account)
    {
        Gate::allowIf(fn (User $user) => $user->id === $account->user_id);

        $account->delete();

        return redirect()->back()->with('success', 'Account deleted successfully');
    }

    /**
     * Remove the batch resources from storage.
     */
    public function destroys(Request $request)
    {
        $validated = $request->validate([
            'ids' => ['array', 'required'],
            'ids.*' => ['string', 'required', 'exists:accounts,id'],
        ]);

        $query = $request->user()->accounts();

        $query->whereIn('id', $validated['ids'])->delete();

        return redirect()->back()->with('success', 'Accounts deleted successfully');
    }
}
