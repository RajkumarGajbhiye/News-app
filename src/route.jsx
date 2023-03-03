
import ArticleApple from "./pages/ArticleApple";
import Tech from "./pages/Tech";
import WallStreetJournal from "./pages/WallStreetJournal";
import App from "./App";
import ArticleAboutTesla from "./pages/ArticleAboutTesla";
const Routes = [
    {
      path: "/",
      element: <App />,
    },
       
        {
          path: "articleapple",
          element: <ArticleApple/>
        },
        {
          path: "tech",
          element: <Tech/>
        },
        {
            path: "tesla",
            element: <ArticleAboutTesla/>
          },
          {
            path: "wallstreetjournal",
            element: <WallStreetJournal/>
          }
     
 
  ];
  
  export default Routes;