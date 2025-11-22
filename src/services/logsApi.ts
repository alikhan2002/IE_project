export async function logUserAction({
  userId,
  recipeId,
  action,
  stepIndex,
}: {
  userId?: string;
  recipeId: string;
  action: string;
  stepIndex?: number;
}) {
  await fetch('https://cookingsteps-backend.vercel.app/log', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_id: userId,
      recipe_id: recipeId,
      action,
      step_index: stepIndex,
    }),
  });
}