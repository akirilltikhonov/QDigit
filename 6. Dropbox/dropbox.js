// Наследование классов через extends
// class Airplane {
//     constructor(name) {
//       this.name = name;
//     }
  
//     takeoff() {
//       console.log(this.name + " взлетел");
//     }

//     landing() {
//         console.log(this.name + " приземлился");
//       }
//   }
  
// class Tu154 extends Airplane {
//     constructor(name) {
//       super(name);
//     }
// }

// class Mig extends Airplane {
//     constructor(name) {
//       super(name);
//     }
//     attack() {
//         console.log(this.name + " атаковал");
//     }
// }


// ES6 классы
var Airplane = function(name) {
    this.name = name;
  };
  
  Airplane.prototype.takeoff = function(){
    console.log(this.name + " взлетел");
  };
  
  Airplane.prototype.landing = function(){
    console.log(this.name + " приземлился");
  };
  

  function Tu154(name) {
    // Вызываем конструктор родителя, убедившись (используя Function#call)
    // что "this" в момент вызова установлен корректно
    Airplane.call(this, name);
  };
  
  // создаем класс Tu154 на базе класса Airplane
  Tu154.prototype = Object.create(Airplane.prototype); 

  // Устанавливаем свойство "constructor" для ссылки на класс Tu154
  Tu154.prototype.constructor = Tu154;

  function Mig(name) {
    Airplane.call(this, name);
  };
  
  Mig.prototype = Object.create(Airplane.prototype); 

  Mig.prototype.constructor = Mig;
  
  Mig.prototype.attack = function(){
    console.log(this.name + " атаковал");
  };
  

  
let airplane = new Airplane('Самолет');
airplane.takeoff();
airplane.landing();

let tu154 = new Tu154('Ту-154');
tu154.takeoff();
tu154.landing();
  
let mig = new Mig('Миг');
mig.takeoff();
mig.attack();
mig.landing();






