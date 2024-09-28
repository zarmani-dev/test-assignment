import Button from "./components/Button";
import LabelCheckbox from "./components/LabelCheckbox";
import Separator from "./components/Separator";

function App() {
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5", "Page 6"];
  return (
    <main className="w-full min-h-screen font-montserrat bg-white pt-[85px]">
      <div className="w-[370px] h-[326px] mx-auto  shadow-2xl rounded-md text-center">
        <LabelCheckbox label={"All pages"} />
        <Separator />
        <div className="w-full h-[164px] overflow-y-scroll overflow-x-hidden">
          {pages.map((page) => (
            <LabelCheckbox key={page} label={page} />
          ))}
        </div>
        <Separator classes="mb-[20px]" />
        <Button />
      </div>
    </main>
  );
}

export default App;
