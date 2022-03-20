let result =80;


switch(true){
  case (result >= 90 && result <= 100 ):
    console.log("A")
    break;
  case (result >= 80 && result <= 89 ):
    console.log("B")
    break;
  case (result >= 70 && result <= 79 ):
    console.log("C")
    break;
  case (result >= 60 && result <= 69 ):
    console.log("D")
    break;
  case (result >= 50 && result <= 59 ):
    console.log("E")
    break;
    case result >= 0 && result < 50:
      console.log("Fail");
      break;
    default:
      console.log("Please enter a number between 0-100");
    break;
}

