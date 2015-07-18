'use strict';
// add your solution here!

function Garden(garden_string, names) {

    var assignments = this.assignRows(garden_string);
    var translated_assignments = this.translateAssignments(assignments);
    var names = names.sort();

    for(var i=0; i < names.length; i++) {
        var func_name = names[i].toLowerCase();
        var func_value = translated_assignments[i];

        this[func_name] = func_value;
    };

}

Garden.prototype.assignRows = function(garden_string) {
    var rows = garden_string.split("\n");
    var assignments = {};

    rows.forEach(function(row){
        for(var j=0; j < row.length; j=j+2) {
            var key = j/2;

            if (!assignments[key]) {
                assignments[key] = "";
                assignments[key] = assignments[key] + row.slice(j, j+2);

            } else {
                assignments[key] = assignments[key] + row.slice(j, j+2);

            }
        }
    })


    return assignments;
}

Garden.prototype.translateAssignments = function(assignments) {

    var assignments = assignments;

    var garden_translation = {
        "V": "violets",
        "R": "radishes",
        "C": "clover",
        "G": "grass"
    }

    for(var prop in assignments){
        var translation = assignments[prop].split("").map(function(char) {
            return garden_translation[char];
        });

        assignments[prop] = translation;
    }

    return assignments;

}