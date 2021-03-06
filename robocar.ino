// Robocar - logo to motion

// Import Adafruit motor libary
#include <AFMotor.h>

AF_DCMotor motor01(1);
AF_DCMotor motor02(2);

void setup() {
  // Initilaize motors
  Serial.begin(9600);
  Serial.println("Motor test!");

  motor01.setSpeed(200);
  motor02.setSpeed(200);
 
  motor01.run(RELEASE);
  motor02.run(RELEASE);
}

void loop() {
  mtr_stop(); 
  delay(1000);
  
  mtr_forward();
  delay(1000);
  
  mtr_backwards();
  delay(1000);
  
  mtr_right();
  delay(1000);
}

void mtr_forward(){
  motor01.run(FORWARD);  
  motor02.run(FORWARD); 

}

void mtr_backwards(){
  motor01.run(BACKWARD);  
  motor02.run(BACKWARD); 
}

void mtr_stop(){
  motor01.run(RELEASE);
  motor02.run(RELEASE); 
}

void mtr_right(){
  motor01.run(FORWARD);  
  motor02.run(BACKWARD); 
}

