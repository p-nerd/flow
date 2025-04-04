<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Account;
use Illuminate\Http\Request;

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
            return redirect()
                ->route('dashboard.accounts.index')
                ->with('error', 'You have reached the maximum limit of '.Account::LIMIT.' accounts.');
        }

        /**
         * @var Account $account
         */
        $account = $query->create($validated);

        return redirect()
            ->route('dashboard.accounts.index')
            ->with('success', "'{$account->name}' account created successfully");
    }

    /**
     * Display the specified resource.
     */
    public function show(Account $account)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Account $account)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Account $account)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Account $account)
    {
        //
    }
}
