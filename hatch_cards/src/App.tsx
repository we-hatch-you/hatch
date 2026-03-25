import AIHomePage from './components/AIHomePage';
import { ThemeProvider } from './components/theme-provider';

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen w-full bg-background text-foreground font-sans antialiased selection:bg-hatch-orange/50 selection:text-white transition-colors duration-300">
        <AIHomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
