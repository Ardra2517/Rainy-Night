const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    
}

function setup(){
   createCanvas(500,600);
   engine = Engine.create();
   world = engine.world;
   


}

function draw(){
 background(0);
}   

