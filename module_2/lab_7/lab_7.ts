import { Transport } from "../lab_7/lab_3_module_decor";


const owner = new Transport.OwnerImpl(
    'Сайдашев',
    'Андрей',
    'Алексеевич',
    new Date("2004-09-07"),
    Transport.OwnerDocumentType.Passport,
    '1234',
    '567890'
);


const owner2 = new Transport.OwnerImpl(
    'Иванов',
    'Андрей',
    'Алексеевич',
    new Date("2004-09-07"),
    Transport.OwnerDocumentType.Passport,
    '1234',
    '567890'
);

const car = new Transport.CarImpl(
    'Kia',
    'Stinger',
    2020,
    '2',
    'A123BC',
    owner,
    Transport.BodyType.Sedan,
    Transport.CarType.Comfort
);

const car2 = new Transport.CarImpl(
    'Audi',
    'Stinger',
    2020,
    '2',
    'A123BC',
    owner,
    Transport.BodyType.Sedan,
    Transport.CarType.Comfort
);

const car3 = new Transport.CarImpl(
    'BMW',
    'Stinger',
    2020,
    '2',
    'A123BC',
    owner2,
    Transport.BodyType.Sedan,
    Transport.CarType.Comfort
);


const vehicleStorage = new Transport.VehicleStorageImpl(new Date());
vehicleStorage.insert(car);
vehicleStorage.insert(car2);
vehicleStorage.insert(car3);

console.log("Исходный массив:"); //kia, audi, bmw
vehicleStorage.getAllVehicles().forEach(vehicle => {
    console.log(vehicle.printVehicleInfo());
});

const vehicleStorageSorted = vehicleStorage.sortByBrand();

//Вариант No1. Реализуйте внутри класса Хранилище метод (не
// забудьте добавить его определение в интерфейс), позволяющий
// выполнить сортировку по Марке А до Я Транспортного средства.
// Метод должен возвращать отсортированный массив Транспортных
// средств.

console.log("Отсортированный по бренду массив:"); //audi, bmw, kia
vehicleStorageSorted.forEach(vehicle => {
    console.log(vehicle.printVehicleInfo());
});


//Вариант No1. Реализуйте метод, возвращающий все Транспортные
// средства, Фамилия владельца которых полностью совпадает с
// заданной в параметре. Метод должен быть невосприимчивым к
// регистру в передаваемом параметре.


console.log(vehicleStorage.findByOwnerLastName("САЙДАШЕВ")); //вернет Kia Audi
console.log(vehicleStorage.findByOwnerLastName("иванов")); //вернет bmw

//Вариант No1. Реализуйте метод внутри класса Транспортное
// средство, возвращающий сведения только VIN-номер, ФИО
// владельца (одной строкой поля) и Регистрационный номер.
console.log(car.getVehicleVINOwnerReg());
console.log(car3.getVehicleVINOwnerReg());