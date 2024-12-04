export const formatPercentage = (percentage: number) => {
    return percentage.toFixed(0) + "%";
};

export const countErrors = (actual: string, epxected: string) => {
    const expectedCharacters = epxected.split("");

    return expectedCharacters.reduce((errors, expectedChar, i) => {
        const actualChar = actual[i];
        if (actualChar !== expectedChar) {
            return errors + 1;
        }
        return errors;
    }, 0);
};

export const calculateAccuracyPercentage = (errors: number, total: number) => {
    if(total > 0) {
        const corrects = total - errors;
        return (corrects / total) * 100;
    }

    return 0;
};

export const calculateWPM = (typed: number, timeInSeconds: number) => {
    const wordsTyped = typed.toString().split(/\s+/).length;
    const timeInMinutes = timeInSeconds / 60;
    return wordsTyped / timeInMinutes;
};