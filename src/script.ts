interface OwnerInt{
    fullName: string
    age: number
    licenseNumber: number
}

interface VechicleInt{
    type: string
    brand: string
    model: string
    year: number
    color: string
    cilinders: number
}

class Owner implements OwnerInt{
    fullName: string
    age: number
    licenseNumber: number

    constructor(fullName: string, age: number, licenseNumber: number){
        this.fullName = fullName
        this.age = age
        this.licenseNumber = licenseNumber
    }
}

class Vehicle extends Owner implements VechicleInt{
    type: string
    brand: string
    model: string
    year: number
    color: string
    cilinders: number

    constructor(type: string, brand: string, model:string, year:number, color: string, cilinders: number, fullName: string, age: number, licenseNumber: number){
        super(fullName, age, licenseNumber)
        this.type = type
        this.brand = brand
        this.model = model
        this.year = year
        this.color = color
        this.cilinders = cilinders
    }
}


const type = document.getElementById('vehicle-type') as HTMLInputElement
const brand = document.getElementById('brand') as HTMLInputElement
const model = document.getElementById('model') as HTMLInputElement
const year = document.getElementById('year') as HTMLInputElement
const color = document.getElementById('color') as HTMLInputElement
const cilinders = document.getElementById('cilinders') as HTMLInputElement
const fullName = document.getElementById('fullName') as HTMLInputElement
const age = document.getElementById('age') as HTMLInputElement
const licenseNumber = document.getElementById('licenseNumber') as HTMLInputElement

const form = document.getElementById('form') as HTMLElement

const vehicleList: object[] = []

const addVehicle = () =>{
    const newVehicle = new Vehicle(type.value, brand.value, model.value, parseInt(year.value), color.value, parseInt(cilinders.value), fullName.value, parseInt(age.value), parseInt(licenseNumber.value))

    vehicleList.push(newVehicle)

    return console.log(vehicleList)
}

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    addVehicle()
})