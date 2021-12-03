const fontColorContrast = (text) => {
    const BLACK = "#000000", WHITE = "#FFFFFF";
    if (!text) return BLACK;
    let color = ''
    switch (text) {
        case 'c': { color = WHITE } break;
        case 'sn': { color = WHITE } break;
        case 'sl': { color = BLACK } break;
        case 'h': { color = WHITE } break;
        case 't': { color = WHITE } break;
        case 'hr': { color = BLACK } break;
        case 'lr': { color = WHITE } break;
        case 's': { color = WHITE } break;
        case 'hc': { color = WHITE } break;
        case 'lc': { color = WHITE } break;
        default: { color = WHITE }
    }
    return color;
};
export default fontColorContrast;