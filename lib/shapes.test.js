
const { Circle, Square, Triangle } = require('./shapes.js').default;

describe('Circle', () => {
    describe('render', () => {
        it('should render a circle', () => {
            const circle = new Circle('#FFFFFF', 'ABC', '#000000');
            const result = circle.render();
            expect(result).toEqual(expect.stringContaining('<circle'));
        });
    });
});

describe('Square', () => {
    describe('render', () => {
        it('should render a square', () => {
            const square = new Square('#FFFFFF', 'ABC', '#000000');
            const result = square.render();
            expect(result).toEqual(expect.stringContaining('<rect'));
        });
    });
});

describe('Triangle', () => {
    describe('render', () => {
        it('should render a triangle', () => {
            const triangle = new Triangle('#FFFFFF', 'ABC', '#000000');
            const result = triangle.render();
            expect(result).toEqual(expect.stringContaining('<polygon'));
        });
    });
});
