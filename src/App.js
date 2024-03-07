import Count from "./components/Count/Count";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import bg from "./components/assets/images/bg-img.jpg";

function App() {
  return (
    <div className="grid grid-cols-2 w-screen h-screen">
      <div className="h-full">
        <Header />
        <Main/>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Count />
      </div>
    </div>
  );
}

export default App;
