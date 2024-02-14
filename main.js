let a = [23,45,63,22,35,11,453,62,46,78,98,467,6];

for(let i=0; i<a.length-1; i++){
    for(let i=0; i<a.length-1; i++){
        if(a[i]>a[i+1]){
            let temp = a[i];
            a[i]=a[i+1];
            a[i+1]=temp;
        }
    }
}
console.log(a);