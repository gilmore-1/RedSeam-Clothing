import Header from "./components/Header";
import Products from "./components/Products";

export default function App() {
  return (
    <div className="flex flex-col w-full h-full bg-[#F8F6F7] py-4 px-25 items-center">
      <Header />
      <main className="w-full border-darkblue mt-17">
        <Products />
      </main>
    </div>
  )
}