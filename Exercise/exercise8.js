//1

class Player{
    constructor (name,health = 10,power = 10){
        this.name = name;
        this.health = health;
        this.power = power;
    }
    //methode untuk hit
    hit(power){
        this.health -= power
    }
    useItem(item){
        this.health += item.health
        this.power += item.power
    }
    showstatus(){
        return `${this.name} (Health => ${this.health}, Power => ${this.power})`;
    }
}

class ShootingGame{
    constructor (player1,player2){
        this.player1 = player1
        this.player2 = player2
    }
    //methode untuk item random
    getRandomItem(){
        const randomHealth = Math.random() < 0.5 ? 0 : 10;
        const randomPower = Math.random() < 0.5 ? 0 : 10;
        return {health: randomHealth, power: randomPower}
    }
    start(){
        while(this.player1.health > 0 && this.player2.health > 0){
          const item1 = this.getRandomItem();
          const item2 = this.getRandomItem();

          //kita pakaikan player nya item
          this.player1.useItem(item1)
          this.player2.useItem(item2)

          //tampilan status sebelum hit
          console.log(this.player1.showstatus());
          console.log(this.player2.showstatus());

          //hit player lain
          this.player1.hit(this.player1.power);
          this.player2.hit(this.player2.power);


          //tampilan status setelah hit
          console.log(this.player1.showstatus());
          console.log(this.player2.showstatus());

        }

        if(this.player1.health<=0){
          return `${this.player2.name} WIN!`
        } else {
          return `${this.player1.name} WIN!`
        }
    }
}

const player1 = new Player("aceng")
const player2 = new Player("ucup")
const game = new ShootingGame (player1,player2)

console.log(game.start());


//2
class Employee {
  constructor(name,tipe) {
    this.name = name;
    this.tipe = tipe;
    this.jumlahjamkerja = 0;
  }


  formatCurrency(price){
    return new Intl.NumberFormat("id-ID",{
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  }
  //kita buatkan function untuk membayar gaji
  bayargaji(hours) {
    this.jumlahjamkerja += hours;
  }
  gajijamkerja() {
    return 0;
  }
}

class FullTimeEmployee extends Employee {
  constructor(name,tipe) {
    super(name,tipe);
  }
  gajijamkerja() {
    const rategajidasar = 100000;
    const rategajilembur = 75000;
    const maksimaljamkerjaregular = 6;

    if(this.jumlahjamkerja <= maksimaljamkerjaregular) {
        return this.jumlahjamkerja * rategajidasar
    } else{
        const gajidasar = (rategajidasar * maksimaljamkerjaregular)
        const waktulemburkerja = (this.jumlahjamkerja - maksimaljamkerjaregular)
        const gajilembur = (waktulemburkerja * rategajilembur)
        return gajidasar + gajilembur
    }
  }
  
}

class ParttimeEmployee extends Employee {
  constructor(name) {
    super(name);
  }
  gajijamkerja() {
    const rategajidasar = 50000;
    const rategajilembur = 30000;
    const maksimaljamkerjaregular = 6;

    if (this.jumlahjamkerja <= maksimaljamkerjaregular) {
        return this.jumlahjamkerja * rategajidasar
    } else{
        const gajidasar = (rategajidasar * maksimaljamkerjaregular)
        const waktulemburkerja = (this.jumlahjamkerja - maksimaljamkerjaregular)
        const gajilembur = (waktulemburkerja * rategajilembur)
        return gajidasar + gajilembur
    }
  }
}

//kita buat karyawan dan jam kerja
const fulltimeemployee = new FullTimeEmployee ("ucup");
fulltimeemployee.bayargaji (10);
console.log(`${fulltimeemployee.name} salary:  ${fulltimeemployee.gajijamkerja()}`);

const parttimeEmployee = new ParttimeEmployee ("azazel")
parttimeEmployee.bayargaji(10);
console.log(`${parttimeEmployee.name} salary: ${parttimeEmployee.gajijamkerja()}`);

//2 lecture
/*class Employee {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    this.workingHours = 0;
  }

  formatCurrency(price) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  }
}

class FullTimeEmployee extends Employee {
  constructor(name, gender) {
    super(name, gender);
  }

  addWorkingHours(hours) {
    this.workingHours += hours;
  }

  calculateSalary() {
    const hourlyRate = 100000;
    const extraHourlyRate = 75000;

    if (this.workingHours <= 6) {
      return {
        name: this.name,
        hours: this.workingHours,
        totalSalary: this.workingHours * hourlyRate,
      };
    } else {
      const regularHours = 6;
      const extraHours = this.workingHours - regularHours;

      return {
        name: this.name,
        hours: this.workingHours,
        totalSalaryRegular: this.formatCurrency(regularHours * hourlyRate),
        totalSalaryExtra: this.formatCurrency(extraHours * extraHourlyRate),
        total: this.formatCurrency(
          regularHours * hourlyRate + extraHours * extraHourlyRate
        ),
      };
    }
  }
}

class PartTimeEmployee extends Employee {
  constructor(name, gender) {
    super(name, gender);
  }

  addWorkingHours(hours) {
    this.workingHours += hours;
  }

  calculateSalary() {
    const hourlyRate = 50000;
    const extraHourlyRate = 30000;

    if (this.workingHours <= 6) {
      return {
        name: this.name,
        hours: this.workingHours,
        totalSalary: this.workingHours * hourlyRate,
      };
    } else {
      const regularHours = 6;
      const extraHours = this.workingHours - regularHours;

      return {
        name: this.name,
        hours: this.workingHours,
        totalSalaryRegular: this.formatCurrency(regularHours * hourlyRate),
        totalSalaryExtra: this.formatCurrency(extraHours * extraHourlyRate),
        total: this.formatCurrency(
          regularHours * hourlyRate + extraHours * extraHourlyRate
        ),
      };
    }
  }
}

const employee1 = new FullTimeEmployee("joko", "cwk");
const employee2 = new PartTimeEmployee("siti", "cwk");

employee1.addWorkingHours(4);
employee1.addWorkingHours(2);
employee1.addWorkingHours(4);

employee2.addWorkingHours(2);
employee2.addWorkingHours(1);
employee2.addWorkingHours(4);

console.log(employee1.calculateSalary());
console.log(employee2.calculateSalary());*/
