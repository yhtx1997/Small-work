import ClearZero from './move/clearZero';//去零
import AddZero from './move/AddZero';//加零
import turnY from './move/turn';//将数组转一下
import Grouping from './move/grouping';//将相邻的相同数字分组

export default class mov {
    constructor(arr) {
        this.arr = arr
    }
    moveLeft() {
        //去零
        let clearZero = ClearZero(this.arr);
        //分组
        let newarr = [[],[],[],[]];
        newarr = new Grouping(clearZero).left();
        //加零
        return AddZero(newarr,'l');
    }
    moveRight() {
        //去零
        let clearZero = ClearZero(this.arr);
        //分组
        let newarr = [[],[],[],[]];
        newarr = new Grouping(clearZero).right();
        //加零
        return AddZero(newarr,'r');
    }
    moveUp() {
        //从x变为y去零
        let clearZero = turnY(this.arr);
        clearZero = ClearZero(clearZero);
        
        let newarr = [[],[],[],[]];
        newarr = new Grouping(clearZero).left();
        //加零
        newarr = AddZero(newarr,'l');
        newarr = turnY(newarr);
        console.log(newarr);
        return newarr;
    }
    moveDown() {
        //从x变为y去零
        let clearZero = turnY(this.arr);
        clearZero = ClearZero(clearZero);
        
        let newarr = [[],[],[],[]];
        newarr = new Grouping(clearZero).right();
        //加零
        newarr = AddZero(newarr,'r');
        newarr = turnY(newarr);
        console.log(newarr);
        return newarr;
    }
}