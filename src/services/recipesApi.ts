export async function fetchRecipes(): Promise<any[]> {
  const res = await fetch("https://cookingsteps-backend.vercel.app/recipes");
  if (!res.ok) throw new Error("Failed to load recipes");
  return await res.json();
}