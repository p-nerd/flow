<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $query = $this->fetchQuery($request);

        $page = $request->input('page');

        $transactions = [];

        if (! $page) {
            $transactions = $query->where('transaction_at', '>=', Carbon::now()->subDays(30))->get();
        } else {
            $perPage = 100;
            $transactions = $query->paginate(perPage: $perPage, page: $page);
        }

        return inertia('dashboard/transactions', [
            'transactions' => $transactions,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Transaction $transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transaction)
    {
        //
    }

    private function fetchQuery(Request $request)
    {
        return Transaction::query()
            ->whereHas('account', fn ($query) => $query->where('user_id', $request->user()->id))
            ->with(['account', 'category'])
            ->orderBy('transaction_at', 'desc');
    }
}
