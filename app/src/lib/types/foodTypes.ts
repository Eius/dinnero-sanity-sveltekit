export type FoodData = {
    title: string,
    description: string | null
    weight: number | null,
    weight_unit: string,
    price: number,
    order: number
}

export type FoodCategory = {
    name: string,
    foods: Pizza[] | Burger[] | StandingOffer[] | Dressing[] | SideDish[] | Drink[]
}

export type Pizza = FoodData;

export type Burger = FoodData;

export type StandingOffer = FoodData;

export type SideDish = FoodData;

export type Dressing = FoodData;

export type Drink = FoodData;