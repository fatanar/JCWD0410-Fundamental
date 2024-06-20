// EXERCISE TAMBAHAN ==========================================================================
/* 
    Write a JavaScript function called phoneNumber that takes a single argument input. 
    The function is intended to format a phone number. It checks the input to ensure 
    it meets certain criteria and then proceeds with formatting. The formatting 
    includes replacing the leading "0" with "62" and creating a template in the 
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The 
    function returns the formatted phone number.

    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex : 
    input = "085244455555"
    output = "(6285)-2444-55555"
*/
function phoneNumber(input) {
    // Periksa apakah masukan bertipe "string"
    if (typeof input !== 'string') {
        return "Nomor telepon tidak valid.";
    }

    // Periksa panjang input
    if (input.length !== 12) {
        return "Nomor telepon tidak valid.";
    }

    // Pastikan semua karakter adalah angka 0-9
    if (!/^\d+$/.test(input)) {
        return "Nomor telepon tidak valid.";
    }

    // Mengganti "0" di depan dengan "62"
    const formattedNumber = `(62${input.slice(1, 4)})-${input.slice(4, 8)}-${input.slice(8)}`;
    return formattedNumber;
}

// Contoh penggunaan:
const inputNumber = "085244455555";
const formattedResult = phoneNumber(inputNumber);
console.log(formattedResult); // Output: "(6285)-2444-55555"


/* 
    You have implemented the BankQueue class to manage customer queues in a bank. In this scenario, 
    you can perform operations such as adding customers to the queue, calling the next customer, and 
    counting the number of customers in the queue.

   constructor:
   - this.queue

   method : 
   - enqueue : menambahkan value baru dalam antrian
   - dequeue : menghilangkan value paling depan dalam antrian
   - size : melihat jumlah antrian saat ini
*/

class BankQueue {
    #queue;
    constructor(){
        this.#queue = [];
    }
    
    //untuk menambah pelangggan
    enqueue(customer){
         this.#queue.push(customer); //.push untuk menambahkan antrian
    }

    //untuk menghilangkan antrian pertama
    dequeue(){
        if (this.#queue.length === 0){
            return;
        }
        return this.#queue.shift() // .shift untuk menghapus 
    }

    //melihat jumlah antrian
    size(){
        return this.#queue.length;
    }
}

//pengguna
const bankqueue = new BankQueue ();
bankqueue.enqueue("Pelanggan a")
bankqueue.enqueue("Pelanggan b")
bankqueue.enqueue("Pelanggan c")
bankqueue.enqueue("Pelanggan d")


console.log("Jumlah pelanggan dalam antrian",bankqueue.size());
console.log("pelanggan yang dipanggil",bankqueue.dequeue());
console.log("sisah jumlah pelanggan dalam antrian",bankqueue.size());

/* 
    You are given a JavaScript class called Train that simulates a train's passenger management system. 
    The Train class has the following methods and properties:

    - constructor(): Initializes the Train with an initial passenger, "masinis," and a maximum 
    capacity of 10 passengers.
    - isFull(): Checks if the train is at full capacity. It returns true if the train is full 
    and false otherwise.
    - isEmpty(): Checks if the train has no passengers except "masinis." It returns true if the 
    train is empty and false otherwise.
    - showPassenger(): Returns an object that contains the list of passengers on the train and 
    the remaining available seats.
    - passengerIn(name): Adds a passenger with the given name to the train. It returns "add passenger 
    success" if the passenger is successfully added, "train full" if the train is at full capacity, 
    and "passenger already exists" if the passenger is already on the train.
    - passengerOut(name): Removes a passenger with the given name from the train. It returns 
    "remove passenger success" if the passenger is successfully removed, "cannot remove masinis" 
    if an attempt is made to remove the "masinis," "train empty" if the train is already empty, and 
    "passenger not found" if the passenger with the given name is not found on the train.
*/
class Train {
    constructor() {
      this.passengers = ['masinis'];
      this.maxCapacity = 10;
    }
  
    isFull() {
      return this.passengers.length >= this.maxCapacity;
    }
  
    isEmpty() {
      return this.passengers.length === 1; // Only 'masinis' is on the train
    }
  
    showPassenger() {
      return {
        passengers: this.passengers,
        availableSeats: this.maxCapacity - this.passengers.length
      };
    }
  
    passengerIn(name) {
      if (this.isFull()) {
        return 'train full';
      }
      if (this.passengers.includes(name)) {
        return 'passenger already exists';
      }
      this.passengers.push(name);
      return 'add passenger success';
    }
  
    passengerOut(name) {
      if (name === 'masinis') {
        return 'cannot remove masinis';
      }
      if (this.isEmpty()) {
        return 'train empty';
      }
      const index = this.passengers.indexOf(name);
      if (index === -1) {
        return 'passenger not found';
      }
      this.passengers.splice(index, 1);
      return 'remove passenger success';
    }
  }
  
  // Example usage:
  const train = new Train();
  console.log(train.passengerIn('John'));
  console.log(train.showPassenger()); 
  console.log(train.passengerOut('John')); 
  

  //lecture version

  //no 1
  function phoneNumber(input) {
    if(typeof input !== "string"){
        return "invalid phone number"
    }

    if(input.length !== 12 ){
        return "invalid phone number"
    }

    for(let i = 0; i < input.length; i++){
        if(input [i] < Number("0")||input[i]>Number("9")){
            return "invalid phone number"
        }
    }

    input = "62" + input.slice(1);
    let template = "replace"
  }