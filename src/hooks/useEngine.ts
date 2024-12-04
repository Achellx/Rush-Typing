import { useCallback, useEffect, useState } from 'react'
import useCountdownTimer from './useCountdownTimer';
import useWords from './useWords';
import useTypings from './useTypings';
import { countErrors } from '../utils/helpers';

export type State = "Start" | "running" | "finished"

const NUMBER_OF_WORDS = 30;
const COUNTDOWN_SECONDS = 30;

const useEngine = () => {
    const [state, setState] = useState<State>("Start")
    const { words, updateWords } = useWords(NUMBER_OF_WORDS);
    const { timeLeft, startCountdown, resetCountdown } = useCountdownTimer(COUNTDOWN_SECONDS);
    const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(state !== "finished");
    const [errors, setErrors] = useState(0);

    const isStarting = state === "Start" && cursor > 0;
    const areWordsFinished = cursor === words.length;

    const sumErrors = useCallback(() => {
        const wordsReached = words.substring(0, cursor);
        setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
    }, [typed, words, cursor]);

    useEffect(() => {
        if (isStarting) {
            setState("running");
            startCountdown();
        }
    }, [isStarting, startCountdown, cursor]);

    useEffect(() => {
        if (!timeLeft){
            console.log("time is up");
            setState("finished");
            sumErrors();
        }
    }, [timeLeft, sumErrors]);

    useEffect(() => {
        if (areWordsFinished) {
            console.log("Words are finished");
            sumErrors();
            updateWords();
            clearTyped();
        }
    }, [cursor, words, clearTyped, typed, areWordsFinished, updateWords, sumErrors]);

    const restart = useCallback(() => {
        console.log("Restarting");
        resetCountdown();
        resetTotalTyped();
        setState("Start");
        setErrors(0);
        updateWords();
        clearTyped();
    }, [clearTyped, updateWords, resetCountdown, resetTotalTyped]);

    return {state, words, updateWords, timeLeft, typed, errors, totalTyped, restart};
};

export default useEngine;