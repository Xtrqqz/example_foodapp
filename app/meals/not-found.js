export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Meal not found</h1>
      <p>
        We couldn't find the meal you're looking for. This could be because:
      </p>
      <ul>
        <li>The meal may have been removed or renamed</li>
        <li>The URL might be incorrect</li>
      </ul>
      <p>Try browsing our menu to find something delicious!</p>
    </main>
  );
}
