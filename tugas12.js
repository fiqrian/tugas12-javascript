const BuahBuah = () => {
  let Buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
  console.log(Buah);
  Buah.pop();
  console.log(Buah);
  Buah.shift();
  return Buah;
};
console.log(BuahBuah());
