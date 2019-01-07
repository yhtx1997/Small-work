
import Deduplication from './deduplication';//将相邻且相同的数字相加

export default class Grouping{//将相邻的相同数字分组
    constructor(clearZero){
        this.clearZero = clearZero;
    }
    left(){
        let newarr = [[],[],[],[]];
        for (let j = 0; j < this.clearZero.length; j++) {
            let grouping = [];
            let i = 0;
            //将重复的 分到一组
            while (i < this.clearZero[j].length) {
                if (this.clearZero[j][i] == this.clearZero[j][i + 1]) {
                    grouping.push([this.clearZero[j][i], this.clearZero[j][i + 1]]);
                    i += 2;
                } else {
                    grouping.push(this.clearZero[j][i]);
                    i++;
                }
            }
            //去重复
            newarr[j] = Deduplication(grouping);
        }
        return newarr;
    }
    right(){
        let newarr = [[],[],[],[]];
        for (let i = 0; i < this.clearZero.length; i++) {
            let grouping = [];
            let j = this.clearZero[i].length - 1;
            //将重复的 分到一组
            while (j >= 0) {
                if (this.clearZero[i][j] == this.clearZero[i][j - 1]) {
                    grouping.unshift([this.clearZero[i][j], this.clearZero[i][j - 1]]);
                    j -= 2;
                } else {
                    grouping.unshift(this.clearZero[i][j]);
                    j--;
                }
            }
            //将重复的进行计算
            newarr[i] = Deduplication(grouping);

        }
        return newarr;
    }


}