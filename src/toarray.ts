export function Hex(str : string) : string {
    let hLen = str.length / 2;
    let result = [];
    for (let i = 0; i<hLen; i++) {
        var h = str.slice(i*2,(i+1)*2);
        result.push("0x"+h);
    }
    return result.join(", ");
}

// Dec convert a comma separated string of decimal numbers to a hex array
export function Dec(str: string) : string {
    let decimals = str.split(",");
    let result = [];
    for (let i = 0; i < decimals.length; i++) {
        let decStr = decimals[i]
        let dec = Number.parseInt(decStr, 10)
        result.push("0x" + dec.toString(16).toUpperCase());
    }
    return result.join(", ");
}

function removeSeparator(str : string) : string {
    return str.replace(/,|;|\s/g, "");
}

// Convert a hex string to an array, removing separator and takings
// hex digit two by two.
export function HexSeparator(str: string) : string {
    return Hex(removeSeparator(str));
}

export function DecSeparator(str: string) : string {
    return Dec(str);
}