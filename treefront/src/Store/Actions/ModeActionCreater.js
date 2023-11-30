import { modeChange,modeSetting } from "./Actions";

export const changeMode = () => ({
    type: modeChange
});

export const setMode = () => ({
    type: modeSetting
});