#JavaScript , ES6
1.Types
2.Coercion
3.Objects
4.Prototypal Inheritance
5.Scope
6.JS Execution
7.Global Object
8.Closures

#JavaScript is Interpreted 
 - Execute the code line by line  & executing it 
 
 V8 : Chrome and NodeJS
 SpiderMonkey:firefox 
 JavaScriptCore: Safari
 Chakra: Microsoft Edge
 
 
 1. JavaScript allow you to have trailing commas meaning in arrays objects or function calls 
 
 #Types
 1. Dynamic typing 
 2.Primitive types (no methods and immutable)
 undefined 
 null 
 boolean 
 number 
 string 
 (symbol)
 
 #Typecasting ? coercion.
 changed from one type to another 
1. Excplicit vs Implicit coercion
    const x = 42;
    const explicit = String(x); //explicit === "42" // what i want 
    const implicit = x + " ",   // implicit === "42" // I want to rely on behaviour of js 

2. == vs === 
    == coerces the types
    === requires equivalent types (requires types match)
a)Two diffrent ways of comparing equality there's double equals and there's triple equals 

b) Coercion 
    1. which values are falsy ?
        undefiend
        null 
        false 
        +0, 0 NaN
        " "
c) which values are truthy ?
    {}
    []
    Everything else 

#Primitives vs Objects
   1.Primitives are immutable
   2.Objects are mutable and stored by reference
   3.Passing by ref vs passing by value [pointers in C]
   
#Prototypal Inheritance
 1.Non primitive type have a few prop/methods associated with them 
        Array.proyotype.push()
        String.prototype.toUpperCase( )
        
  2.Each object stores ref to its prototype
  3.Properties/methods defined most tightly to the instance have priority
  4.Most primitive types have object wrappers
    String()
    Number()
    Boolean()
    Object()
    (Symbol())    
    
    syntax : arr._proto_._proto_
  5.JS will automatically "box" (wrap) primitive values so you have access to methods 
     42.toString() //Errors
     const x = 42; 
     x.toString()  //"42" 
     x._proto_     //[Number:0]
     x instanceof Number //  false
         
#Scope 
How long variable lives
1. Variable lifetime 

a)lexical scoping (var) : from when they're declared until when there function ends
a) Block Scoping (const, let): until the next  end of } is reached 

2.Hositing 
a)Function definition are hoisted , but not lexically-scoped initilizations

# The JavaScript Engine

a) Before executing the code , the engine reads the entire fileand throw a syntax error if one is found 
b) Any function definitions will be saved in memory
c)variable initilizations will not be run , but lexically-scoped variable names will be declared 

#ES5, ES6, ES2016,ES2017, ES.Next 
1. ECMA vs JS
ECMA: spec for language 
JS is implementation of ECMA

2. What do most env support 
3.Transpiler(Babel, Type Script , CoffeeScript , etc..)
Takes new language and turns them into ES 5 code 

#Closures
1. Functions that refer to variable declared by parent function still have access to those variables
2. Possible because of JS Scoping
#IIFE : Immediately Invoked Function Expression 
1. A function expression that gets invoked immediately 
2. Creates clousure
3. Doesn't add to or modify global object

# First-class functions
1.Laguage handles function 
2.classes are first class citizen
3.can be assigned to variables , array values , and set as  object values 
4 .can be assed as arguments to other func
5.can be returned from functions
6. Allow for the creation of higher-order functions
    1. Either takes one or more functions as arguments or returns a function 
    2.map(), filter(), reduce()
    
#Synchronous ? Async ? Single-Threaded?
1.JS is a single threaded, synchronous language
2.function that takes a long time to run will cause a page to become unresponsive 
3. JS has functions that act asynchronously

#Asynchronous JS
1.Execution stack 
2.Browser APIs
3.Function queue
4.Event Loop

#Execution stack 
1.function invoked by other funs get added to call stack 
2.When func complete they are removed from the stack and the frame below continues executing

#Stack :
   Stack is DS 
   ex deck of cards or stack of lunch trays
   When u add things to the stack they appear on the top when you want to grab the next thing 
   what ever you grab first is the most recent thing that you put on to a stack 
   Queue : Is like a line of people where first person of the line is the first person who comes out

#Asynchronous JS
1.Asynchronous functions
    setTimeout()
    XMLHttpRequest(),jQuery.ajax(),fetch()
    Database calls
#Callbacks
 1.control flow with asynchronous calls
 2.Execute func once asynchronous call returns value 
    a.Program doesnt have to halt and wait for value 

#Promises 

# Async/Await
Introduced in ES 2017
 
   




























         
        
        
        
        
        


   # ES6-ES2015-JS
