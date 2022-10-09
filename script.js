let a = '33.333333'
let b = '22.22222'
a = parseFloat(a);
b = parseInt(b);

console.log(a,' ',b);
console.log('Проверка кавычек \" \' \\ \n aa \t fffff"');

var item = ['Nikita ','Dima ','Denis ','Pidor '];
console.log('All name in my massive: \n',item[0],item[1],item[2],item[3],item[4]); 
console.log(item.length);

console.log('\n');

item[4] = item[0]+item[1]+item[2]+item[3]
console.log('All name in one index massive \n' + item[4])


number_index = item.indexOf('Pidor ');
console.log ('Index number for Name Nikita in "item" massive ', number_index)


console.log('\n');

ebat_chislo = (1*2)*(2*3)+(4*234342423)*(3/232412)+9.45453;
console.log('Ebat ya kretin '+ ebat_chislo); //I naxyi?



let inc = 3;
console.log('До Инкремента ',inc);
inc++;
console.log('После инкремента,инкремент рулит!!! ',inc);
inc--;
console.log('А это декремент, вот пидарас, все сломал!!!!!!!',inc);


item[5] = 'Egor';
console.log('Новый участник программы: ',item[5]);
delete item[5];
console.log('Он ударился мизинцем об тумбочку((( ',item[5]);
console.log ('И кто будет везти программу? ');

alert('All Good');