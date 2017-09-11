var command_list = [{execution_time: 0, cmd:'fd'},{execution_time: 100, cmd:'stop'}]
var new_command_list = []

var i = 0;
var theTime = 0

var rawTurtle = "fd 100, fd 500, rt 70, fd 100"
var exeTime = 0
var motorPause = 10
//var cmd = {execution_time:0, mcmd:''}
//
// Write the test cases based on the rawTurtle
//
function processTurtle(t){
	t = t.split(", ")
	//var cmd = {execution_time:0, mcmd:''}
	//var re = /[a-z]/;

	for (var i=0; i<t.length; i++){

		//console.log(t[0], t[1])
		var cmd = new Object()
		var tt = t[i].split(" ")

		if (tt[0] == "fd"){
			cmd.execution_time = exeTime;
			cmd.mcmd = "fd";
			new_command_list.push(cmd);
		}else if (tt[0] == "rt"){
			cmd.execution_time = exeTime;
			cmd.mcmd = "rt";
			new_command_list.push(cmd);
		}
	
		//new_command_list.push(cmd);
		exeTime += Number(tt[1]);
		//console.log(cmd, new_command_list)

		// Pause between commands
		exeTime += motorPause;
		cmd.mcmd = "pause";
		cmd.execution_time = exeTime;

		new_command_list.push(cmd);
		//console.log(cmd)
	}
	console.log(new_command_list)

}

// The main program loop exectues a procedural set of commands provided by the processTurtle function
// When a command is executed it is removed from the stack
function loop(){

	//console.log(command_list);
	if (command_list.length>0){
		if (command_list[0].execution_time == theTime){
			if (command_list[0].cmd == "stop"){
				stop()
			}else if (command_list[0].cmd == "fd"){
				fd()
			}
			command_list.shift();
			//console.log(theTime)
		}
	}

	theTime++;
}

function stop(){
	console.log("exectute stop");
}

function fd(){
	console.log("exectute fd");
}

function lt(){
	console.log("exectute fd");
}

processTurtle(rawTurtle)

for(var i=0;i<=110;i++){
	loop()
}

