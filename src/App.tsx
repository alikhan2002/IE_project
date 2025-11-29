import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { HomePage } from "./components/HomePage";
import { CuisinePage } from "./components/CuisinePage";
import { RecipePage } from "./components/RecipePage";
import { fetchRecipes } from "../src/services/recipesApi";

function useUserId() {
  useEffect(() => {
    let userId = localStorage.getItem("userId");
    const params = new URLSearchParams(window.location.search);

    if (!userId) {
      userId = params.get("userId");
    }
    if (!userId) {
      userId = uuidv4();
    }

    localStorage.setItem("userId", userId);

    params.delete("userId");
    const newUrl = `${window.location.pathname}${params.toString() ? "?" + params.toString() : ""}`;
    window.history.replaceState({}, "", newUrl);
  }, []);

  return localStorage.getItem("userId");
}

type Page = 
  | { type: "home" }
  | { type: "cuisine"; cuisine: "kazakh" | "palestinian" }
  | { type: "recipe"; recipeId: string; cuisine: "kazakh" | "palestinian" };

export default function App() {
  const userId = useUserId();
  //const recipe_list = fetchRecipes();
  const [currentPage, setCurrentPage] = useState<Page>({ type: "home" });

  return (
@@ -56,10 +30,10 @@ export default function App() {
      {currentPage.type === "recipe" && (
        <RecipePage
          recipeId={currentPage.recipeId}
          userId={userId}
          onNavigateBack={() => setCurrentPage({ type: "cuisine", cuisine: currentPage.cuisine })}
        />
      )}

    </>
  );
}