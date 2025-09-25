import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import {getMeals} from "@/lib/meals";
import {Suspense} from "react";

const Meals = async () => {
    const meals = await getMeals();

    return (
        <MealsGrid meals={meals}/>
    )
}

export default function MealsPage()
{


    return (
        <>
            <header className={classes.header}>
                <h1>Delicious meals, created{' '}<span className={classes.highlight}>by you </span></h1>
                <p>Choose your favourite recipe and cook it yourself. It is easy and fun!</p>
                <p className={classes.cta}>
                    <Link href={"/meals/share"}>
                        Share your favourite recipe
                    </Link>
                </p>
            </header>
            <main>
                <Suspense fallback={<div className={classes.loading}>Fetching meals...</div>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}