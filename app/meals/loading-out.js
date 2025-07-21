import classes from "./loading.module.css";

export default function MealsLoadingPage() {
  return (
    <p className={classes.loading}>
      Fetching meals... Please wait a moment while we prepare the delicious
      recipes for you.
    </p>
  );
}
