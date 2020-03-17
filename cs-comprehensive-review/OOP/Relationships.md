# Relationships

Think about the human experience, and think about all of the relationships you can form with other people. Specifically:

- Think about the relationship you have with your mother
- Think about the relationship you have with your Aunt
- Think about the relationship you have with your boyfriend/husband or girlfriend/wife
- Think about the relationship you have with your best friend
- Think about the relationship you have with a friend
- Think about the relationship you have with a stranger

I know this list is unecessairly long, but it gets the point across: Your relationships are probably unique and different with different people in your life, and you think of them a certain way.

Classes & Objects can also have these relationships.
Let's assume that two objects (Object A and Object B) exist.
There are four important kinds of relationships in OOP:

- Association (A relationship exists between Object A and Object B. There are three kinds of relationships)
  - Inheritance (is a)
    - Object A **is an** Object B
    - An apple **is a** Fruit
    - A Ferrari **is a** Car
    - A Car **is a** Vehicle
    - A Cat / A Dog **is an** Animal
  - Aggregation (uses / part of)
    - Object A **uses / is part of** Object B
    - A Student **is a part of** a Course
    - A Student **uses** a Professor for help
    - Once the semester ends, a Student no longer needs a Professor or a Course
  - Composition (has a)
    - Object A **has a/an** Object B
    - A Person **has a** Heart
    - A Person **has a** Head
    - A Person **has a** Lung
    - A Person cannot survive without a Heart, a Head, or Lungs

## Inheritance Example: C++

```cpp
class Car {
    private int currentSpeed;
    protected void accelerate(int );
    protected void decelerate(int );
    protected int getCurrentSpeed();
};

//Notice how the Ferrari is a car.
class Ferrari : public Car {
    //Note: all protected methods are now available in this class
    //But not all cars can raise or lower spoilers... a good case where inheritance could be used.
    private bool spoilerIsRaised;
    public void raiseSpoiler(bool);
};
```

## Aggregation Example: C++

```cpp
class Person{
    private std::string: name;
    public void setName(std::string);
    public void getName(std::string);
};

class Course{
    private Person instructor;
    private Person students[40];
    public void setInstructor(std::string);
    public std::string getInstructor();
    //notice how students are a part of a course, and how they can enroll and drop out of the course.
    public void enrollStudent(Person student);
    public void dropStudent(Person student);
    public void viewStudents(Person students[]);
};
```

## Composition Example: C++

```cpp
class Engine{
    private int currentSpeed;
    public void accelerate(int);
    public void decelerate(int);
    public void getCurrentSpeed(int);
};

class Car {
    //Notice how the car has an engine.
    Engine engine;
};
```

In all of the examples above, there were more than two classes defined for each example, yet in each example, the classes were **associated** with one another.

[More info can be found here.](https://javapapers.com/oops/association-aggregation-composition-abstraction-generalization-realization-dependency/)
