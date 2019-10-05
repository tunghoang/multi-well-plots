exports.getWellColor = getWellColor;
function getWellColor(well) {
    let color = well.color;
    if (isArray(color)) {
        let colorArr = toArray(color);
        return colorArr[(well._idx || 0) % colorArr.length];
    }
    return well.color;
}
exports.toArray = toArray;
function toArray(value) {
    if (Array.isArray(value))
        return value;
    else if (typeof(value) == 'string') {
        try {
            return JSON.parse(value);
        } catch(e) {
            return [];
        }
    } else
        return [];
}
exports.isArray = isArray;
function isArray(value) {
    if (typeof(value) == 'string') {
        try {
            const json = JSON.parse(value);
            if (Array.isArray(json))
                return true;
            else
                return false;
        } catch (e) {
            return false;
        }
    } else if (Array.isArray(value)) {
        return true;
    }
    return false;
}
exports.palette2RGB = palette2RGB;
function palette2RGB(palette, semiTransparent) {
    if (!palette || !Object.keys(palette).length) return 'transparent';
    return `rgb(${palette.red},${palette.green},${palette.blue},${semiTransparent ? palette.alpha / 2 : 1})`
}
