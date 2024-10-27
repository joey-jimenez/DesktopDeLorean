const planck = require('planck-js'); // Adjust according to your setup

const world = planck.World({
    gravity: planck.Vec2(0, 0) // Adjust gravity direction and magnitude
});

function createBox(x, y) {
    const body = world.createBody({
        type: 'dynamic',
        position: planck.Vec2(x, y)
    });
    body.createFixture(planck.Box(1, 1), {
        density: 1.0,
        friction: 0.5
    });
    return body;
}

// Main animation loop
function update() {
    world.step(1 / 60);
    // Logic to update your DOM based on the physics simulation
    requestAnimationFrame(update);
}

// Start the simulation
update();
