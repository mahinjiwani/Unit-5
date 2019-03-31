// var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

// var questions = [
//   ["What language did the word 'Ketchup' come from", "Japanese", "Chinese", "French", "B"],
//   ["Which NFL quarterback has won the most Super Bowl titles?", "Aaron Rodgers", "Drew Brees", "Tom Brady", "C"],
//   ["Which country hosted the 2016 Olympic Games?", "USA", "Brazil", "Australia",  "B"],
//   ["Who is the only NBA player to have 30,000 points, 8,000 rebounds, and 8,000 assists in their career?", "LeBron James", "Michael Jordan", "Shaquille O'Neal", "A"]
//   ];
 
// function get(x){
//   return document.getElementById(x);
// }
// function renderQuestion(){
//   test = get("test");
//   if(pos >= questions.length){
//     test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
//     get("test_status").innerHTML = "Test completed";
    
//     pos = 0;
//     correct = 0;
//     return false;
//   }
//   get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
//   question = questions[pos][0];
//   chA = questions[pos][1];
//   chB = questions[pos][2];
//   chC = questions[pos][3];
//   test.innerHTML = "<h3>"+question+"</h3>";

//   test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
//   test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
//   test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
//   test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
// }
// function checkAnswer(){
  
//   choices = document.getElementsByName("choices");
//   for(var i=0; i<choices.length; i++){
//     if(choices[i].checked){
//       choice = choices[i].value;
//     }
//   }

//   if(choice == questions[pos][4]){
   
//     correct++;
//   }
  
//   pos++;
  
//   renderQuestion();
// }
// window.addEventListener("load", renderQuestion, false);

