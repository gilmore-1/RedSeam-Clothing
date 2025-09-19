import Header from "./components/Header";
import Products from "./components/Products";

export default function App() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#F8F6F7] py-4 px-4 sm:py-6 sm:px-6 md:py-8 md:px-8 lg:px-25">
      <div className="w-full">
        <Header />
        <main className="w-full flex-1">
          <Products />
        </main>
      </div>
    </div>
  )
}