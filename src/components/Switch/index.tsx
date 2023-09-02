
import Switch from "react-switch";

type ThemeSwitchProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeSwitch = ({ isDark, toggleTheme }: ThemeSwitchProps) => {
  return (
    <Switch 
      onChange={toggleTheme}
      checked={isDark}
      offColor="#767577"
      onColor={isDark ? "#000000" : "#81b0ff"}
      handleDiameter={20}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)" 
      height={25}
      width={50}
      className="react-switch"
    />
  )
}

export default ThemeSwitch;
