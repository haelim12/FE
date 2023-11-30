import lightLogo from "../../Assets/Images/LightLogo.png";
import darkLogo from "../../Assets/Images/DarkLogo.png";
import lightBackground from "../../Assets/Images/Main/MainBackground_Light.jpg";
import darkBackground from "../../Assets/Images/Main/MainBackground_Dark.jpg";
import { modeChange,modeSetting } from "../Actions/Actions";

const initialState = {
    logo : lightLogo,
    background : lightBackground
}

function modeReducer(state=initialState, action) {
    switch (action.type) {
        case modeSetting:
            if (!localStorage.getItem("color")) {
                localStorage.setItem("color", "LIGHT");
            };
            if (localStorage.getItem("color") === "LIGHT") {
                return { ...state, logo: lightLogo, background: lightBackground };
            }
            return { logo: darkLogo, background: darkBackground };
        case modeChange:
            const newColor = localStorage.getItem("color") === "LIGHT" ? "DARK" : "LIGHT";
            localStorage.setItem("color", newColor);
            return { ...state, logo: newColor === "LIGHT" ? lightLogo : darkLogo, background: newColor === "LIGHT" ? lightBackground : darkBackground };
        default:
            return state;
    }
}

export { modeReducer };