
/**
 * 星図で使う星の色
 * 色は情報の種類を表す
 */
export const STAR_COLORS = {
    // メインコンテンツへの入口
    gateway: "#ffe29a",

    // やっこキャラズ
    twinklesparkle: "#7950b8",
    daydreamers: "#b57b95",
    radiantdaze: "#ffe16c",

    // YakkoWorks StarMap
    modeling: "#397be8",
    development: "#c8bac1",
    annotations: "#eeeeee",
} as const;

/**
 * 星の大きさ
 * 大きさは情報の重要度を表す
 * 単位はpx
 */
export const STAR_SIZES = {
    primary: 20,
    secondary: 12,
    minor: 6,
} as const;

export type StarColor = keyof typeof STAR_COLORS;
export type StarSize = keyof typeof STAR_SIZES;
