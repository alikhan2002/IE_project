export async function logUserRating({
  userId,
  recipeId,
  feedback,
  rating,
}: {
  userId?: string;
  recipeId: string;
  feedback: string;
  rating?: number;
}) {
  await fetch('https://cookingsteps-backend.vercel.app/rating', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_id: userId,
      recipe_id: recipeId,
      feedback: feedback,
      rating: rating,
    }),
  });
}