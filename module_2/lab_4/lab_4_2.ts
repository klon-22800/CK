import {Transport} from "./lab_3_module";
//Это вторая версия
import OwnerImpl = Transport.OwnerImpl;
import OwnerDocumentType = Transport.OwnerDocumentType;
import MotorbikeImpl = Transport.MotorbikeImpl;
import Car = Transport.Car;
import CarImpl = Transport.CarImpl;
import CarType = Transport.CarType;
import VehicleStorage = Transport.VehicleStorage;
import VehicleStorageImpl = Transport.VehicleStorageImpl;
import BodyType = Transport.BodyType;

const owner = new OwnerImpl(
    'Сайдашев',
    'Андрей',
    'Алексеевич',
    new Date("2004-09-07"),
    OwnerDocumentType.Passport,
    '1234',
    '567890'
);

const ownerOth = new OwnerImpl(
    'не Сайдашев',
    'Андрей',
    'Алексеевич',
    new Date("2004-09-07"),
    OwnerDocumentType.Passport,
    '1234',
    '567890'
);


const motorbike = new MotorbikeImpl(
    'Yamaha',
    'YZF-R1',
    2019,
    '1',
    'B456DE',
    owner,
    'DeltaBox',
    true
);

const Garage:VehicleStorage<Car> = new VehicleStorageImpl(new Date());

const car = new CarImpl(
    'Kia',
    'Stinger',
    2020,
    '2',
    'A123BC',
    owner,
    BodyType.Sedan,
    CarType.Comfort
);

Garage.insert(car);
Garage.insert(car);
Garage.insert(car);
Garage.insert(car);

console.log(Garage.getAllVehicles())
console.log(Garage.findByVin("2")); // Kia stinger info 
console.log(Garage.findByVin("1")); //undef

const vehicleStorage = new VehicleStorageImpl(new Date());


vehicleStorage.insert(car);
vehicleStorage.insert(motorbike);

console.log(vehicleStorage.getAllVehicles());

vehicleStorage.findByVin('1')?.owner.printOwnerInfo(); // ownerinfo by vin 