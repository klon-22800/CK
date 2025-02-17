enum OwnerDocumentType {
    Passport = 'Passport',
    DriverLicense = 'Driving license',
    SNILS = "SNILS"
}

enum BodyType {
    Coupe = 'Coupe',
    Sedan = 'Sedan',
    Hatchback = 'Hatchback',
}

enum CarType {
    Econom = 'Econom',
    Comfort = 'Comfort',
    Lux = 'Lux',
    Sport = 'Sport'
}

interface Owner {
    lastName: string;
    firstName: string;
    patronymic: string;
    birthDate: Date;
    documentType: OwnerDocumentType;
    documentSeries: string;
    documentNumber: string;
    printOwnerInfo(): void;
}

class OwnerImpl implements Owner {
    private _lastName: string;
    private _firstName: string;
    private _patronymic: string;
    private _birthDate: Date;
    private _documentType: OwnerDocumentType;
    private _documentSeries: string;
    private _documentNumber: string;

    constructor(
        lastName: string,
        firstName: string,
        patronymic: string,
        birthDate: Date,
        documentType: OwnerDocumentType,
        documentSeries: string,
        documentNumber: string
    ) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._patronymic = patronymic;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get patronymic(): string {
        return this._patronymic;
    }

    set patronymic(value: string) {
        this._patronymic = value;
    }

    get birthDate(): Date {
        return this._birthDate;
    }

    set birthDate(value: Date) {
        this._birthDate = value;
    }

    get documentType(): OwnerDocumentType {
        return this._documentType;
    }

    set documentType(value: OwnerDocumentType) {
        this._documentType = value;
    }

    get documentSeries(): string {
        return this._documentSeries;
    }

    set documentSeries(value: string) {
        this._documentSeries = value;
    }

    get documentNumber(): string {
        return this._documentNumber;
    }

    set documentNumber(value: string) {
        this._documentNumber = value;
    }

    printOwnerInfo(): void {
        console.log(`Фамилия: ${this._lastName}`);
        console.log(`Имя: ${this._firstName}`);
        console.log(`Отчество: ${this._patronymic}`);
        console.log(`Дата рождения: ${this._birthDate.toLocaleDateString()}`);
        console.log(`Тип документа: ${this._documentType}`);
        console.log(`Серия документа: ${this._documentSeries}`);
        console.log(`Номер документа: ${this._documentNumber}`);
    }
}

interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    printVehicleInfo(): void;
}

class VehicleImpl implements Vehicle {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner
    ) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }

    get brand(): string {
        return this._brand;
    }

    set brand(value: string) {
        this._brand = value;
    }

    get model(): string {
        return this._model;
    }

    set model(value: string) {
        this._model = value;
    }

    get year(): number {
        return this._year;
    }

    set year(value: number) {
        this._year = value;
    }

    get vin(): string {
        return this._vin;
    }

    set vin(value: string) {
        this._vin = value;
    }

    get registrationNumber(): string {
        return this._registrationNumber;
    }

    set registrationNumber(value: string) {
        this._registrationNumber = value;
    }

    get owner(): Owner {
        return this._owner;
    }

    set owner(value: Owner) {
        this._owner = value;
    }

    printVehicleInfo(): void {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
    }
}

interface Car extends Vehicle {
    bodyType: BodyType;
    carType: CarType;
}

class CarImpl extends VehicleImpl implements Car {
    private _bodyType: BodyType;
    private _carType: CarType;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        bodyType: BodyType,
        carType: CarType
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
        this._bodyType = bodyType;
        this._carType = carType;
    }

    get bodyType(): BodyType {
        return this._bodyType;
    }

    set bodyType(value: BodyType) {
        this._bodyType = value;
    }

    get carType(): CarType {
        return this._carType;
    }

    set carType(value: CarType) {
        this._carType = value;
    }

    printVehicleInfo(): void {
        super.printVehicleInfo();
        console.log(`Тип кузова: ${this._bodyType}`);
        console.log(`Класс автомобиля: ${this._carType}`);
    }
}

interface Motorbike extends Vehicle {
    frameType: string;
    isSport: boolean;
}

class MotorbikeImpl extends VehicleImpl implements Motorbike {
    private _frameType: string;
    private _isSport: boolean;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        frameType: string,
        isSport: boolean
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
        this._frameType = frameType;
        this._isSport = isSport;
    }

    get frameType(): string {
        return this._frameType;
    }

    set frameType(value: string) {
        this._frameType = value;
    }

    get isSport(): boolean {
        return this._isSport;
    }

    set isSport(value: boolean) {
        this._isSport = value;
    }

    printVehicleInfo(): void {
        super.printVehicleInfo();
        console.log(`Тип рамы: ${this._frameType}`);
        console.log(`Для спорта: ${this._isSport ? 'Да' : 'Нет'}`);
    }
}

interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAllVehicles(): T[];
}

interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAllVehicles(): T[];
    insert(vehicle: T): void;
    findByVin(vin: string): T | undefined;
}

class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    private _creationDate: Date;
    private _vehicles: T[];

    constructor(creationDate: Date, vehicles: T[] = []) {
        this._creationDate = creationDate;
        this._vehicles = vehicles;
    }

    get creationDate(): Date {
        return this._creationDate;
    }

    set creationDate(value: Date) {
        this._creationDate = value;
    }

    get vehicles(): T[] {
        return this._vehicles;
    }

    set vehicles(value: T[]) {
        this._vehicles = value;
    }

    getAllVehicles(): T[] {
        return this._vehicles;
    }

    insert(vehicle: T): void {
        this._vehicles.push(vehicle);
    }

    findByVin(vin: string): T | undefined {
        return this._vehicles.find(v => v.vin === vin);
    }
}

const owner = new OwnerImpl(
    'Сайдашев',
    'Андрей',
    'Алексеевич',
    new Date(2004, 9, 7),
    OwnerDocumentType.Passport,
    '1234',
    '567890'
);

const ownerOth = new OwnerImpl(
    'не Сайдашев',
    'Андрей',
    'Алексеевич',
    new Date(2004, 9, 7),
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
console.log(Garage.findByVin("2")); // Kia stinge info 
console.log(Garage.findByVin("1")); //undef

const vehicleStorage = new VehicleStorageImpl(new Date());


vehicleStorage.insert(car);
vehicleStorage.insert(motorbike);

console.log(vehicleStorage.getAllVehicles());

vehicleStorage.findByVin('1')?.owner.printOwnerInfo(); // ownerinfo by vin 
