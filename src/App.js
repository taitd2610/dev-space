import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import Sidebar from "./components/Sidebar";
import Dev from "./components/Dev";
import Hashnode from "./components/Hashnode";
import Github from "./components/Github";
import ProductHunt from "./components/ProductHunt";
import Hackernews from "./components/Hackernews";

function App() {
  return (
    <div className="text-center mx-auto">
      <BrowserRouter>
        <div className="flex md:flex-row flex-col">
          {/* Sidebar */}
          <div className="bg-darkblue md:w-1/3 md:h-screen h-full py-20">
            <div className="m-8">
              <h1 className="text-4xl font-bold text-white">Devspace</h1>
              <span className="text-white italic font-semibold">
                Get top posts from the best developer platforms.
              </span>
            </div>

            <Sidebar />

            <div className="mt-12 bg-gray-900 shadow text-white p-2 mx-auto w-36 rounded">
              <a
                href="https://github.com/rutikwankhade/devspace"
                target="_blank"
                rel="noreferrer"
                className="flex"
              >
                <span className="text-sm font-semibold">⭐ Star on Github</span>
              </a>
            </div>
          </div>

          {/* Route */}
          <div className="md:w-2/3 bg-gray-100  overflow-y-scroll max-h-screen">
            <Route exact path="/" component={Dev} />
            <Route exact path="/hashnode" component={Hashnode} />
            <Route exact path="/github" component={Github} />
            <Route exact path="/producthunt" component={ProductHunt} />
            <Route exact path="/hackernews" component={Hackernews} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
