import Obelisk from 'obelisk.js';

export class Obelometer {
    constructor(canvas) {
        this.canvas = canvas;
        this.dms = 50;
        this.index = 0;
        this.colorMap = {
            10: [0x0B0B61, 0x0B0B61],
            11: [0x0B0B61, 0x0B0B61],
            12: [0x0B0B61, 0x0B0B61],
            13: [0x0B0B61, 0x0B0B61],
            14: [0x0B0B61, 0x0B0B61],
            15: [0x0B0B61, 0x0B0B61],
            16: [0x0B0B61, 0x0000FF],
            17: [0x0000FF, 0x0040FF],
            18: [0x00BFFF, 0x0080FF],
            19: [0x01DF3A, 0x01DF01],
            20: [0x01DF3A, 0x01DF01],
            21: [0x01DF3A, 0x01DF01],
            22: [0x01DF3A, 0x01DF01],
            23: [0x3ADF00, 0x74DF00],
            24: [0xA5DF00, 0xD7DF01],
            25: [0xDBA901, 0xDF7401],
            26: [0xDF3A01, 0xDF0101],
            27: [0xB43104, 0xB40404],
            28: [0xB40404, 0x8A0808],
            29: [0x61210B, 0x610B0B],
            30: [0x61210B, 0x610B0B],
            31: [0x61210B, 0x610B0B],
            32: [0x61210B, 0x610B0B],
            33: [0x61210B, 0x610B0B],
            34: [0x61210B, 0x610B0B],
            35: [0x61210B, 0x610B0B],
            36: [0x61210B, 0x610B0B]
        };
        const point = new Obelisk.Point(250, 450);
        this.pixelView = new Obelisk.PixelView(this.canvas, point);
        this.renderGrid();
        console.log('obelometer started');
    }

    cube(height, color) {
        let obeliskDimension = new Obelisk.CubeDimension(this.dms, this.dms, height);
        let obeliskColor = new Obelisk.CubeColor().getByHorizontalColor(color);
        //build cube with dimension and color instance
        return new Obelisk.Cube(obeliskDimension, obeliskColor, true);
    }

    renderGrid() {
        const color = new Obelisk.SideColor().getByInnerColor(Obelisk.ColorPattern.GRAY);
        const dimension = new Obelisk.BrickDimension(this.dms, this.dms);
        const brick = new Obelisk.Brick(dimension, color);
        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <= 4; j++) {
                const p3dBrick = new Obelisk.Point3D(i * (this.dms - 2), j * (this.dms - 2), 0);
                this.pixelView.renderObject(brick, p3dBrick);
            }
        }
    }

    reset() {
        let context = this.canvas.getContext('2d');
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.index = 0;
        this.renderGrid();
    }

    color(temp) {
        let base = Math.floor(temp);
        let colors = [];
        if (temp < 10) {
            colors = this.colorMap[10]
        } else if (temp > 36) {
            colors = this.colorMap[36]
        } else {
            colors = this.colorMap[base]
        }
        let fraction = temp % 1;
        if (fraction < 0.5) {
            return colors[0];
        } else {
            return colors[1];
        }
    }

    coords(index) {
        let x = index % 4;
        let y = 0;
        if (index > 0) {
            y = Math.floor(index / 4);
        }
        return [x, y]
    }


    renderCube(temp) {
        if (this.index === 20) {
            this.reset();
        }
        let color = this.color(temp);
        let xy = this.coords(this.index);
        const point = new Obelisk.Point3D(xy[0] * (this.dms - 2), xy[1] * (this.dms - 2), 0);
        const cube = this.cube(Math.round(temp * 10), color);
        this.pixelView.renderObject(cube, point);
        this.index++
    }

    showTemperature(temperature) {
        this.renderCube(temperature);
    }
}