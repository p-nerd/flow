<?php

namespace Database\Factories;

use App\Models\Account;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'account_id' => Account::factory(),
            'category_id' => Category::factory(),
            'amount' => fake()->numberBetween(-10000, 10000),
            'payee' => fake()->company(),
            'notes' => fake()->optional(0.7)->sentence(),
            'transaction_at' => fake()->dateTimeBetween('-3 months', 'now'),
        ];
    }
}
