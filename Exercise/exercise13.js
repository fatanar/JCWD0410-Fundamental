/*Exercise

Create a code that could handle a queue on food ordering process, with this specification:
● Create a class to handle queuing process in a file.
● Create file to handle and execute queue class.
● Each queue process takes a random interval from 1-10 seconds.
● Clue : Use while & promise

Exercise - Output

● Add orders to queue
● [Log] Print all data in queue
● Run process -> process queue based on random interval
● [Log] Queue 1 Done in XXX minutes
● [Log] Queue 2 Done in XXX minutes
● [Log] Queue 3 Done in XXX minutes
● [Log] Queue 4 Done in XXX minutes*/

class Food {
    #queue;
    constructor(){
        this.#queue = [];
    }
    
    //untuk menambah orderan
    masukanOrderan(customer){
         this.#queue.push(customer); //.push untuk menambahkan antrian
    }

    //untuk proses orderan
    prosesorderan = async () =>{
        while (this.#queue.length > 0){
        const orderan = this.#queue.shift()
        const randomInterval = Math.floor(Math.random()*10) +1;
        //mengubah second ke ms 
        await this.delay(randomInterval * 1000)    
        console.log(`[Log] ${orderan} Done in ${randomInterval} seconds`);
        } 
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

const myFunction = () => {
    return "ini adalah function";
  };
//pengguna
const foodQueue = new Food();
const pesanan1 = ("pizza")
const pesanan2 = ("Kebab")
const pesanan3 = ("Ice cream")

foodQueue.masukanOrderan(` customer1: ${pesanan1}`);
foodQueue.masukanOrderan(` customer2: ${pesanan2}`);
foodQueue.masukanOrderan(` customer3: ${pesanan3}`);


foodQueue.prosesorderan();
module.exports = { myFunction,foodQueue };
