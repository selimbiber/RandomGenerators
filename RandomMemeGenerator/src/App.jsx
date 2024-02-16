import Footer from "./components/Footer";
import Header from "./components/Header";
import Meme from "./components/Meme";
import "./index.css";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen gap-y-4">
      <Header />
      <Meme />
      <Footer />
    </div>
  );
}
