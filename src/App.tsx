import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { CuisinePage } from "./components/CuisinePage";
import { RecipePage } from "./components/RecipePage";

type Page = 
  | { type: "home" }
  | { type: "cuisine"; cuisine: "kazakh" | "palestinian" }
  | { type: "recipe"; recipeId: string; cuisine: "kazakh" | "palestinian" };

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>({ type: "home" });

  return (
    <>
      {currentPage.type === "home" && (
        <HomePage 
          onNavigateToCuisine={(cuisine) => setCurrentPage({ type: "cuisine", cuisine })}
        />
      )}
      
      {currentPage.type === "cuisine" && (
        <CuisinePage
          cuisine={currentPage.cuisine}
          onNavigateBack={() => setCurrentPage({ type: "home" })}
          onSelectRecipe={(recipeId) => setCurrentPage({ type: "recipe", recipeId, cuisine: currentPage.cuisine })}
        />
      )}
      
      {currentPage.type === "recipe" && (
        <RecipePage
          recipeId={currentPage.recipeId}
          onNavigateBack={() => setCurrentPage({ type: "cuisine", cuisine: currentPage.cuisine })}
        />
      )}
      
    </>
  );
}