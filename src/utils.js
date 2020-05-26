exports.convertToCSV = convertToCSV;
function convertToCSV(objArray) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';

    for (var i = 0; i < array.length; i++) {
        let line = '';
        for (let index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }
        str += line + '\r\n';
    }
    return str;
}

exports.exportCSVFile = function(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }
    let jsonObject = JSON.stringify(items);
    let csv = convertToCSV(jsonObject);
    let exportedFilenmae = fileTitle + '.csv' || 'export.csv';
    let blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = exportedFilenmae;
        a.click();
        window.URL.revokeObjectURL(url);
    }
}

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
