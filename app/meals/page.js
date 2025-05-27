import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "../../components/meals/meals-grid.js";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community.",
};

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, createt {""}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it by yourself. It is easy and
          fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
