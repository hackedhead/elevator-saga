{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            elevator.goToFloor(0);
        });
        elevator.on("floor_button_pressed", function(floor) {
            if(!elevator.destinationQueue.includes(floor)){
                elevator.goToFloor(floor);
            }
        });
        floors.forEach(function(floor) {
            floor.on('up_button_pressed', function(){
                if(!elevator.destinationQueue.includes(floor.floorNum())){
                    elevator.goToFloor(floor.floorNum());
                }
            });
            floor.on('down_button_pressed', function(){
                if(!elevator.destinationQueue.includes(floor.floorNum())){
                    elevator.goToFloor(floor.floorNum());
                }
            });
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
