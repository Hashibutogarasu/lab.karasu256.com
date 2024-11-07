import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const theme = useTheme();
  const isDark = theme.theme === "dark";

  return <div onClick={() => theme.setTheme(isDark ? "light" : "dark")} className="flex items-center space-x-4 cursor-pointer">
    {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
  </div>
}