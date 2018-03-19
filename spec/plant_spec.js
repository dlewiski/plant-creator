import { Plant } from './../src/plant.js'

describe('Plant', function() {
  let apple = new Plant('Apple');

  beforeEach(function() {
    // let apple = new Plant('Apple');
    jasmine.clock().install();
    // apple.grow();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a starting health of 50', function() {
    expect(apple.health).toEqual(50);
  });

  it('should have a starting health of 50', function() {
    expect(apple.name).toEqual('Apple');
  });

  it('should have a starting health of 50', function() {
    expect(apple.height).toEqual(0);
  });

  it('should have height of 2 at 2 seconds', function() {
    apple.growTimeout();
    jasmine.clock().tick(1000);
    apple.growTimeout();
    jasmine.clock().tick(1000);
    // console.log(apple.height);
    // console.log(apple.height);
    expect(apple.height).toEqual(2);
  });

  it('should have health of 55 in 10 seconds', function() {
    apple.plantLife();
    jasmine.clock().tick(20000);
    expect(apple.health).toEqual(45);
  });

  it('should have 2 fruit at 80 health', function() {
    let apple = new Plant('Apple');
    // apple.height = 0;
    apple.water();
    jasmine.clock().tick(60000);
    console.log(apple);
    expect(apple.fruit).toEqual(2);
  });

  it('should have 2 fruit at 80 health', function() {
    let apple = new Plant('Apple');
    apple.plantLife();
    jasmine.clock().tick(180000);
    console.log('error happen', this.height)
  });
})
