const temperature ={
    temperatureBase: 10,
    toFahrenheit:function(){
        return this.temperatureBase * (9/5) + 32
    },
    toKelvin:function(){
        return this.temperatureBase + 273.15
    },
    toReamur:function(){
        return this.temperatureBase * 0.8
    }
}

console.log(temperature.temperatureBase)
console.log(temperature.toFahrenheit())
console.log(temperature.toKelvin())
console.log(temperature.toReamur())