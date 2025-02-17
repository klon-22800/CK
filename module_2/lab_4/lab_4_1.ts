import {Transport} from "./lab_3_module";
//Я не разобрался нужно ли импортировать только namespace или все разом, поэтому это первая версия 

const owner = new Transport.OwnerImpl(
    'Сайдашев',
    'Андрей',
    'Алексеевич',
    new Date("2004-09-07"),
    Transport.OwnerDocumentType.Passport,
    '1234',
    '567890'
);

const ownerOth = new Transport.OwnerImpl(
    'не Сайдашев',
    'Андрей',
    'Алексеевич',
    new Date("2004-09-07"),
    Transport.OwnerDocumentType.Passport,
    '1234',
    '567890'
);


const motorbike = new Transport.MotorbikeImpl(
    'Yamaha',
    'YZF-R1',
    2019,
    '1',
    'B456DE',
    owner,
    'DeltaBox',
    true
);

const Garage:Transport.VehicleStorage<Transport.Car> = new Transport.VehicleStorageImpl(new Date());

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

Garage.insert(car);
Garage.insert(car);
Garage.insert(car);
Garage.insert(car);

console.log(Garage.getAllVehicles())
console.log(Garage.findByVin("2")); // Kia stinger info 
console.log(Garage.findByVin("1")); //undef

const vehicleStorage = new Transport.VehicleStorageImpl(new Date());


vehicleStorage.insert(car);
vehicleStorage.insert(motorbike);

console.log(vehicleStorage.getAllVehicles());

vehicleStorage.findByVin('1')?.owner.printOwnerInfo(); // ownerinfo by vin 