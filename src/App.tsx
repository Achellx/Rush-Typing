import "./index.css";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import { useState, useEffect } from "react";
import UserTypings from "./components/UserTypings";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";
import Header from "./pages/Header";
import ThemeOption from "./components/ThemeOption";

const GenerateWords = ({ words }: { words: string }) => {
  return <div className=" text-slate-500 opacity-75">{words}</div>;
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <div className=" text-primary-500 font-bold">{timeLeft}s</div>;
};

function App() {
  const {
    words,
    state,
    updateWords,
    timeLeft,
    typed,
    errors,
    restart,
    totalTyped,
  } = useEngine();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "theme-dark");

  const WordsContainer = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="relative max-w-5xl mt-3 text-3xl leading-relaxed break-all">
        {children}
      </div>
    );
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const switchTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <Header />
      <div className="theme-options">
      <ThemeOption switchTheme={switchTheme} />
      </div>
      <WordsContainer>
        <GenerateWords words={words} />
        <UserTypings
          className="absolute inset-0"
          words={words}
          userInput={typed}
        />
      </WordsContainer>
      <CountdownTimer timeLeft={timeLeft} />
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      />
      <Results
        className="mt-10"
        state={state}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </>
  );
}

export default App;
