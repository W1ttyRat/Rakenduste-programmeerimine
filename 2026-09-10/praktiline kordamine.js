const users = [
{ id: 1, name: "Mari", age: 22, active: true },
{ id: 2, name: "Jüri", age: 17, active: false },
{ id: 3, name: "Kati", age: 31, active: true },
{ id: 4, name: "Martin", age: 19, active: false },
{ id: 5, name: "Laura", age: 26, active: true }
]

// 3.1. Kuva console.log() abil kõikide kasutajate nimed.
console.log("Kasutajate nimed: ", users[0].name, users[1].name, users[2].name, users[3].name, users[4].name);

// 3.2. Kasuta .filter() meetodit, et leida kõik aktiivsed kasutajad.
console.log("Aktiivsete kasutajate nimed: ", users.filter(user => user.active).map(user => user.name));

// 3.3. Kasuta .filter() meetodit, et leida kõik vähemalt 18-aastased kasutajad.
console.log("17+ kasutajad: ", users.filter(user => user.age > 17).map(user => user.name));

// 3.4. Kasuta .map() meetodit, et luua uus massiiv, mis sisaldab ainult kasutajate nimesid.
console.log("Kasutajate nimed: ", users.map(user => user.name));

// 3.5. Kasuta .find() meetodit, et leida kasutaja, kelle id on 3.
console.log("kasutaja id on 3: ", users.find(user => user.id === 3).name);

// 3.6. Kirjuta tavaline funktsioon getUserStatus(user), mis tagastab:
 //"Aktiivne", kui kasutaja on aktiivne;
 //"Mitteaktiivne", kui kasutaja ei ole aktiivne.
function getUserStatus(user) {
    if (user.active) {
        console.log("Kasutaja on aktiivne");
        return "Aktiivne";
    } else {
        console.log("Kasutaja on mitteaktiivne");
        return "Mitteaktiivne";
    }
}
getUserStatus(users[0]);

// 3.7. Kirjuta arrow function getGreeting(user), mis kasutab template literal'it ja tagastab näiteks:
 //"Tere, Mari! Sa oled 22 aastat vana."
 const getGreeting = (user) => {
    return `Tere, ${user.name}! Sa oled ${user.age} aastat vana!`;
}
console.log(getGreeting(users[0]));

// 3.8. Kasuta destructuring'ut, et võtta ühe kasutaja objektist välja name ja age.
let person = users[0];
console.log("Kasutaja nimi ja vanus: ", person.name, person.age);

// 3.9. Kasuta spread-süntaksit, et luua uus kasutaja, kelle andmed on:
 //{ id: 6, name: "Karl", age: 24, active: true }
 //Lisa uus kasutaja uude massiivi nii, et esialgne users massiiv ei muutuks.
let newUser = { ...users[0], id: 6, name: "Karl", age: 24, active: true };
console.log("Uus kasutaja: ", newUser);
console.log("Esialgne users massiiv: ", users);

// 3.10. Lisa ühele kasutajale valikuline omadus address:
 //address: { city: "Tallinn" }
 users[0].address = { city: "Tallinn" };
 console.log("Kasutaja linn: ", users[0]);

//Kuva kasutaja linn optional chaining'u abil:
 //user.address?.city
 function getUserCity(user) {
    this.city = user.address?.city;
    console.log("Kasutaja linn (optional chaining): ", this.city);
 }
 getUserCity(users[0]);

//Kui linna ei ole, kuva nullish coalescing'u abil "Linn puudub":
 //user.address?.city ?? "Linn puudub"
function getUserCityWithFallback(user) {
    user.address.city = null; // abitehe, et testida funktsiooni

    this.city = user.address?.city ?? "Linn puudub";
    console.log("Kasutaja linn (nullish coalescing): ", this.city);

}
getUserCityWithFallback(users[0]);

// 3.11. Käi kasutajad läbi .forEach() abil ja kuva iga kasutaja kohta:
 //Mari – Aktiivne
 //Jüri – Mitteaktiivne
users.forEach(user => {
    console.log(`${user.name} - ${user.active ? "Aktiivne" : "Mitteaktiivne" }`);
});

// 3.12. Sorteeri kasutajad vanuse järgi noorimast vanimani.
console.log("Kasutajad sorteeritud vanuse järgi: ", users.sort((a, b) => a.age - b.age));