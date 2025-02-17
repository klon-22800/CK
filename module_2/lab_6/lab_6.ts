import { Transport } from "./lab_3_module_decor";


const owner = new Transport.OwnerImpl(
    'Сайдашев',
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



console.log(car.printVehicleInfo()); 



try {
    (Transport.CarImpl.prototype as any).test = 1;
    console.log("Добавили новое поле")
} catch (error) {
    console.error("Не удалось изменить поле прототипа:", error);
}

try {
    Object.defineProperty(Transport.CarImpl.prototype, 'printVehicleInfo', {
      value: function() { console.log("изменен printVehicleInfo"); },
      writable: false,
      configurable: false
    });
  } catch (error) {
    console.error("Не удалось изменить свойство прототипа:", error);
}



