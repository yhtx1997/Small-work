import '../css/1024.scss';
import move from "./move";
//随机位置新建 2 或 4 函数
let s = 0;
let create = () => {
    let x = Math.floor(Math.random() * 4);
    let y = Math.floor(Math.random() * 4);

    // console.log(s)
    if (s > 100) {
        s = 0;
        return;
    }
    if (arr[x][y] == 0) {
        if (Math.floor(Math.random() * 10) % 2 == 0) {
            arr[x][y] = 2;
        } else {
            arr[x][y] = 4;
        }
        s = 0;
        return;
    } else {
        s++;
        return create();
    }
}

//渲染页面
let updateHtml = () => {
    //获取元素
    let warp = document.getElementById('warp');
    let html = '';
    //将数据转换为 HTML 
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            html += `<div class='c c-${arr[i][j]}'>${arr[i][j]==0?'':arr[i][j]}</div>`;
        }
    }
    //将 数据转换的 HTML 渲染到页面
    warp.innerHTML = html;
}


let arr = [
    [0, 4, 8, 4],
    [2, 0, 2, 8],
    [4, 2, 0, 8],
    [2, 2, 2, 0]
];
create();
create();
updateHtml();
//监听按键
window.onkeydown = (e) => {
    switch (e.keyCode) {
        case 37:
            // ←
            console.log('←');
            arr = new move(arr).moveLeft();
            break;
        case 38:
            // ↑
            console.log('↑');
            arr = new move(arr).moveUp();
            break;
        case 39:
            // →
            console.log('→');
            arr = new move(arr).moveRight();
            break;
        case 40:
            // ↓
            console.log('↓');
            arr = new move(arr).moveDown();
            break;
    }

    create(); //随机位置新建
    updateHtml(); //更新数据到页面

}