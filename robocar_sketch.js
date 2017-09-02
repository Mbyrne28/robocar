var command_list = [{execution_time: 0, cmd:'fd'},{execution_time: 100, cmd:'stop'}]

var i = 0;
var theTime = 0

function loop(){

	//console.log(command_list);
	if (command_list.length>0){
		if (command_list[0].execution_time==theTime){
			if (command_list[0].cmd == "stop"){
				stop()
			}else if (command_list[0].cmd == "fd"){
				fd()
			}
			command_list.shift();
			console.log(theTime)
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

for(var i=0;i<=110;i++){
	
	loop()
}

