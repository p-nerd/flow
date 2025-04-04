<?php

namespace Database\Seeders;

use App\Models\Account;
use App\Models\User;
use Illuminate\Database\Seeder;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::all()->each(function ($user) {
            Account::factory()
                ->forUser($user)
                ->state(['name' => 'Checking Account'])
                ->create();

            Account::factory()
                ->forUser($user)
                ->state(['name' => 'Savings Account'])
                ->create();

            Account::factory()
                ->forUser($user)
                ->withPlaidId()
                ->state(['name' => 'Credit Card Account'])
                ->create();
        });

        Account::factory()
            ->count(47)
            ->create();

        Account::factory()
            ->count(950)
            ->withoutPlaidId()
            ->create();
    }
}
