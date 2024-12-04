import "../index.css";

const ThemeOption = ({ switchTheme }: { switchTheme: (theme: string) => void }) => {

    return (
        <>
            <div className="theme-option" id="theme-dark" onClick={() => switchTheme("theme-dark")}></div>
            <div className="theme-option" id="theme-light" onClick={() => switchTheme("theme-light")}></div>
            <div className="theme-option" id="theme-blue" onClick={() => switchTheme("theme-blue")}></div>
        </>
    );
}

export default ThemeOption;