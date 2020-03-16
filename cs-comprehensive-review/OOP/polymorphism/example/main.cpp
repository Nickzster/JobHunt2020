#include <iostream>
#include "Animal.h"
#include "Dog.h"
#include "Cat.h"

using namespace std;

int main()
{
    //object a with class Animal can take many different forms...
    //Polymorphism
    Animal *a;
    Cat c;
    Dog d;
    a = &c;
    a->talk();
    a = &d;
    a->talk();
}