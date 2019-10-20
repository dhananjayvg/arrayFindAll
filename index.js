function findAllOccurances(ar, el) {
    let i=-1;
    const result = [];
    do {
        i = ar.indexOf(el, i+1);
        if(i != -1) { result.push(i);}
    } while(i != -1);
    return result;
}

const ar = [1, 3, 4, 2, 2, 5, 1, 2, 5, 6, 3, 2];
const el = 2;
console.log(findAllOccurances(ar,el));
