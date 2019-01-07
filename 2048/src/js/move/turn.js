export default function turn(arr) {//将数组转一下
    let clearZero = [[],[],[],[]];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            clearZero[i][j] = arr[j][i]
        }
    }
    return clearZero;
}