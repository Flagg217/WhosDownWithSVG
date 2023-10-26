
class Shapes {
    constructor(bgColor) {
        this.bgColor = bgColor;
    }
};

class Square extends Shapes {
    constructor(bgColor, text, textColor) {
        super(bgColor);
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return `
            <svg width="100" height="100">
                <rect width="100" height="100" fill="${this.bgColor}" />
                <text x="50" y="50" font-size="45" fill="${this.textColor}" text-anchor="middle" dominant-baseline="central">${this.text}</text>
            </svg>
        `;
    }
};

class Triangle extends Shapes {
    constructor(bgColor, text, textColor) {
        super(bgColor);
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return `
            <svg width="100" height="100">
                <polygon points="50,0 100,100 0,100" fill="${this.bgColor}" />
                <text x="50" y="50" font-size="45" fill="${this.textColor}" text-anchor="middle" dominant-baseline="central">${this.text}</text>
            </svg>
        `;
    }
};

class Circle extends Shapes {
    constructor(bgColor, text, textColor) {
        super(bgColor);
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return `
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="50" fill="${this.bgColor}" />
                <text x="50" y="50" font-size="45" fill="${this.textColor}" text-anchor="middle" dominant-baseline="central">${this.text}</text>
            </svg>
        `;
    }
};

module.exports = {
    Square,
    Triangle,
    Circle,
};






