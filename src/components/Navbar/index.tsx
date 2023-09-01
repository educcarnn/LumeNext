import Link from "next/link";
import { useTheme } from "next-themes";
import ThemeSwitch from "../Switch";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between flex-wrap">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center mr-4">
                <span className="text-white">Eduardo Carneiro</span>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link href="/">
                    <span className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                      Tempo
                    </span>
                  </Link>
                  <Link href="/cep">
                    <span className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                      CEP
                    </span>
                  </Link>
                  <Link href="/formulario">
                    <span className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                      Formulário
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center pr-2 sm:ml-6 sm:pr-0 sm:space-x-4">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                <ThemeSwitch isDark={isDark} toggleTheme={toggleTheme} />
              </button>
            </div>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link href="/">
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                Tempo
              </span>
            </Link>
            <Link href="/cep">
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                CEP
              </span>
            </Link>
            <Link href="/formulario">
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                Formulário
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
