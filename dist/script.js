"use strict";
class Owner {
    constructor(fullName, age, licenseNumber) {
        this.fullName = fullName;
        this.age = age;
        this.licenseNumber = licenseNumber;
    }
}
class Vehicle extends Owner {
    constructor(type, brand, model, year, color, cilinders, fullName, age, licenseNumber) {
        super(fullName, age, licenseNumber);
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.cilinders = cilinders;
    }
}
const type = document.getElementById('type');
const brand = document.getElementById('brand');
const model = document.getElementById('model');
const year = document.getElementById('year');
const color = document.getElementById('color');
const cilinders = document.getElementById('cilinders');
const fullName = document.getElementById('fullName');
const age = document.getElementById('age');
const licenseNumber = document.getElementById('licenseNumber');
const form = document.getElementById('form');
const vehicleList = [];
const newVehicle = new Vehicle(type.value, brand.value, model.value, parseInt(year.value), color.value, parseInt(cilinders.value), fullName.value, parseInt(age.value), parseInt(licenseNumber.value));
const addVehicle = () => {
    vehicleList.push(newVehicle);
    return console.log(vehicleList);
};
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addVehicle();
});
