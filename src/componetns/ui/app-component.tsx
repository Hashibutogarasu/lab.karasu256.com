import { AppHeader } from "./app-header";
import { Footer } from "./app-footer";
import { ThemeProvider } from "../theme-provider";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className={`min-h-screen flex-col`}>
        <AppHeader />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}