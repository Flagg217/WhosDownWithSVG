class Svg {
    constructor(shape, bgColor, text, textColor) {
        this.shape = shape;
        this.bgColor = bgColor;
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        return `
            <svg width="200" height="200">
                <rect width="200" height="200" style="fill:${this.bgColor}" />
                <text x="50%" y="50%" text-anchor="middle" style="fill:${this.textColor}; font-size: 60px; font-family: Helvetica, Arial, sans-serif;">${this.text}</text>
            </svg>
        `;
    }
}

module.exports = {
    Svg,
};