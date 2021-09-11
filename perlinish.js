export const perlinish = (canvasNode)=>{
    const PE = {};
    const shapes = ['▮','▬','▰','▲','▴','▶','▸','►','▼','▾','◀','◂','◄','◆','◖','◗','◢','◣','◤','◥','◼'];
    const ctx = canvasNode.getContext("2d");

    PE.generate = (config={})=>{
        const arr = [];
        const width = config.width || 100;
        const height = config.height || 100;
        canvasNode.width = width;
        canvasNode.height = height;
        ctx.filter = `blur(${config.blur || 5}px)`;
        ctx.font = `${config.fontSize || 16}px Arial`;
        const shapesNumber = config.numberOfShapes || 100;

        let i = 0;
        while (i < shapesNumber) {
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        ctx.fillText(shape, (Math.random()*width), (Math.random()*height));
        i++;
        }

        let x = 0;
        let y = 0;
        while (x <= width &&
        y < height) {
            const colorData = ctx.getImageData(x, y, 1, 1).data;
            if (!arr[y]) arr[y] = [];
            arr[y].push(colorData[3]);
            x++;
            if (x > width) {
            x = 0;
            y++;
            }
        }
        return arr;
    }

    return PE;
}