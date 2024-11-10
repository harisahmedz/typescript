let ageWithType: number;
let age:number = 18;
ageWithType = 18;


let sting:String = 'hello'

let testBool : Boolean = false;


let testStringOrNumber : string |  number // union types
testStringOrNumber = 10
testStringOrNumber = '10';


//Array
let namesArray = ["array", 'joe', 'jane']
namesArray.push("mike");

let numbers = [1,2,3]
numbers.push(2)

let testStringArray : string[]
testStringArray = ['1','2','3']

let testNumberArray :number[]

testNumberArray = [23,1];


let arrayNumbeString : (string | number) []
arrayNumbeString=[1,'2','4']

//Objects

let user ={
    username:'john',
    age:22,
    isAdmin:false,
}
user.username = "jane"
user.age = 18

let userObj: {
    username:String
    age:number
    isAdmin:boolean
}

userObj = {
    username :"john",
    age:23,
    isAdmin:false,
}


let userObj2: {
    username:String
    age:number
    isAdmin:boolean
    phone?:string //not required
}


userObj2 = {
    username :"john",
    age:23,
    isAdmin:false,
    phone:"23"
}

// ANY 
let testAny;
testAny =12
testAny ="Hello"

let testAnyArray : any[]

testAnyArray = [1, "two", false, []];


//FUNCTIOMS

let sayHi = ()=>{
    console.log("Hi, welcome")
}

let funcReturnString = ():string=>{
    console.log("hi")
    return "lama dev"
}
let  multiple = (num:number):number=>{
    return 2 * num;
}

let  multiple2 = (num:number):number=>{
    return 2 * num;
}

let  multiple3 = (num:number):void=>{
    
}


let sum = (num1:number, num2:number, another?:number)=>{
    return num1+num2
}
sum(2,3)

let func = (user:{username:string,age:number, phone?:string})=>[
    console.log(user.username)
]

//TYPE Aliasses

type UserType ={
    username:string;
    age:number;
    phone?:string
}

let funcBetter = (user:UserType)=>{
    console.log(user.username)
}

//function signaure

type myFunc = (a:number, b:string)=>void

let write :myFunc = (num, str)=>{
    console.log(num+" times" + str)
}

type UserType2 = {
    username:string;
    age:number;
    phone?:string;
    theme:"dark" | "light"
}

const userWithTheme :UserType2={
    username:"john",
    age:23,
    theme:"light"
}


//InterFaces

interface IUser {
    username:string;
    email:string;
    age:number;
}

interface IEmployee extends IUser{
    employeeId:number
}
const emp :IEmployee ={
    username:"tom",
    email:'tom@gmail.com',
    age:43,
    employeeId:1,
}

const client :IUser ={
    username:"tom",
    email:'tom@gmail.com',
    age:43,
}

//Generics

interface IAuthor {
    id:number,
    username:string
}

interface ICategory {
    id:number,
    title:string
}
interface IPost {
    id:number;
    title:string;
    desc:string;
    extra : IAuthor []  | ICategory[]
}

interface IPostBetter<T> {
    id:number;
    title:string;
    desc:string;
    extra :  T[]
}

const testMe : IPostBetter <String> = {
    id:1,
    title:"post title",
    desc:"post desc",
    extra:["str", "str2"]
}


interface IPostEvenBetter <T extends object>{
    id:number;
    title:string;
    desc:string;
    extra :  T[];
}


const testMe2 : IPostEvenBetter <{id:number, username:string}> = {
    id:1,
    title:"post title",
    desc:"post desc",
    extra:[{id:1, username:'MY NAME'}]
}
const testMe3 : IPostEvenBetter <IAuthor> = {
    id:1,
    title:"post title",
    desc:"post desc",
    extra:[{id:1, username:'MY NAME'}]
}