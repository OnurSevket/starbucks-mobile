import {Dimensions, PixelRatio} from "react-native";

const {height, width} = Dimensions.get("window");

const wp = (widthPercent : number) => {
    return PixelRatio.roundToNearestPixel(
        (width * widthPercent) / 100
    );
};

const hp = (heightPixel : number) => {
    return PixelRatio.roundToNearestPixel(
        (height * heightPixel) / 100
    );
};

const FIGMA_WIDTH = 390;
const px = (valuePixel: number) => {
    const widthPercent = (valuePixel / FIGMA_WIDTH) * 100;
    return PixelRatio.roundToNearestPixel(
        (width * widthPercent) / 100
    );
};

export const metrics = {
    wp,
    hp,
    px,
};
