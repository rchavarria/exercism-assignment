import Robot from './robot-name';

describe('Robot', () => {
  let robot;

  beforeEach(() => {
    robot = new Robot();
  });

  it('has a name', () => {
    expect(robot.name).toMatch(/^[A-Z]{2}\d{3}$/);
  });

  it('name is the same each time', () => {
    expect(robot.name).toEqual(robot.name);
  });

  it('different robots have different names', () => {
    const NUMBER_OF_ROBOTS = 10000;
    let usedNames = {};
    const used = new Set();

    for (let i = 0; i < NUMBER_OF_ROBOTS; i++) {
      let newRobot = new Robot();
      usedNames[newRobot.name] = true;
      used.add(newRobot.name);
    }

    expect(used.size).toEqual(NUMBER_OF_ROBOTS);
    expect(Object.keys(usedNames).length).toEqual(NUMBER_OF_ROBOTS);
  });

  it('is able to reset the name', () => {
    let originalName = robot.name;

    robot.reset();
    let newName = robot.name;

    expect(newName).toMatch(/^[A-Z]{2}\d{3}$/);
    expect(originalName).not.toEqual(newName);
  });

  it('should set a unique name after reset', () => {
    const NUMBER_OF_ROBOTS = 10000;
    let usedNames = {};

    usedNames[robot.name] = true;
    for (let i = 0; i < NUMBER_OF_ROBOTS; i++) {
      robot.reset();
      usedNames[robot.name] = true;
    }

    expect(Object.keys(usedNames).length).toEqual(NUMBER_OF_ROBOTS + 1);
  });

});
