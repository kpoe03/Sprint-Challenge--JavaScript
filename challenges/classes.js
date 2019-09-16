// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker {
    constructor(cuboidAttr) {
    this.length = cuboidAttr.length;
    this.width = cuboidAttr.width;
    this.height = cuboidAttr.height;
  } 
  
  
  volume() {
    return this.length * this.width * this.height;
  }
  
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class CubeMaker extends CuboidMaker {
    constructor(cubeMakerAttr) {
        super(cubeMakerAttr)
        this.length = cubeMakerAttr.length;
        this.width = cubeMakerAttr.width;
        this.height = cubeMakerAttr.height;
    } 
  
  
    volume() {
      return this.length * this.width * this.height;
    }
    
    surfaceArea() {
      return 6 * (this.length * this.length);
    }
  }


    const cuboid = new CuboidMaker({
    'length': 4,
    'width': 5,
    'height': 5,
  });

  const cube = new CubeMaker({
    'length': 4,
    'width': 4,
    'height': 4,

    });
  
  

  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130
  
  console.log(cube.volume()); // 64
  console.log(cube.surfaceArea()); // 96
  


// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.



 
  

    