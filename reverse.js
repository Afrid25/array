const number = [12,34,46,56,87,45,23,89,67];

const reverse = number.reverse();

console.log(reverse);

let friends = ['Abul', 'Babul', 'Tabul', 'chabul', 'chulbul'];

const afterReverse = [];
for( const friend of friends){
    console.log(friend);
    afterReverse.unshift(friend);
    console.log(afterReverse);
}