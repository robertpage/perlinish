perlinish = (canvasNode)=>{
    const PE = {};
    const shapes = ['▮','▬','▰','▲','▴','▶','▸','►','▼','▾','◀','◂','◄','◆','◖','◗','◢','◣','◤','◥','◼'];
    const ctx = canvasNode.getContext("2d");

    PE.generate = ()=>{
        const arr = [];
        const width = 100;
        const height = 100;
        canvasNode.width = width;
        canvasNode.height = height;
        ctx.filter = 'blur(5px)';
        ctx.font = '16px Arial';

        let i = 0;
        while (i < 100) {
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