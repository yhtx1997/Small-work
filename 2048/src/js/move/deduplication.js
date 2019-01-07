export default function Deduplication (grouping){//将相邻且相同的数字相加
    for (let i = 0; i < grouping.length; i++) {
        if (typeof grouping[i] == 'object') {
    
            grouping[i] = grouping[i][0] + grouping[i][1];
        }
    }
    return grouping;
}
