export default function ClearZero (arr){//去零
    let clearZero = [[],[],[],[]];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (arr[i][j] != 0) {
                clearZero[i].push(arr[i][j])
            }
        }
    }
    return clearZero;
}
