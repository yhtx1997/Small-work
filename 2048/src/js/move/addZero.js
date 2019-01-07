export default function AddZero (newarr,w){//加零
    for (let i = 0; i < newarr.length; i++) {
        while (newarr[i].length != 4) {
            if(w == 'l'){
                newarr[i].push(0);
            }else if(w == 'r'){

                newarr[i].unshift(0);
            }
        }
    }
    return newarr;
}