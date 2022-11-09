import sayHi from "./say";
import '../../assets/styles/style.css';
import json from "../json"
sayHi()



console.log('hello my name is Alexey')

for (let key in json) {
    console.log(key+': '+json[key])
}