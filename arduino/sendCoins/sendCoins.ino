void setup() {
  //Initialize serial and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

}
int count = 0;
int stopCount = 20;
int coins[4] = {1, 5, 10, 25};

void loop() {
  // pick a random coin value and send it
  int index = random(0,3);
  Serial.write("coin:");
  int thisCoin = coins[index];
  Serial.println(thisCoin);
  delay(1000);
  // if we've sent 20 coins stop
  if (count == stopCount) {
    // This loop loops forever and does nothing
    while (true) {
      continue;
    }
  }
  count = count + 1;
}
