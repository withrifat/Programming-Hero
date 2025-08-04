/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
for (let mediDay = 1; mediDay <= lastDay; mediDay++) {
    if (mediDay % 3 === 0) {
        console.log(mediDay + " - medicine");
    } else {
        console.log(mediDay + " - rest");
    }
}

