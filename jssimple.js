//let word = document.getElementById('word').value;

            //let number = document.getElementById('num').value;

            //let output = document.getElementById('output').value;

            function check(word, number) {
                const pickedLetter = word[2];
                
                const pickedNum = number[3];

                const combined = pickedLetter + pickedNum;

                return output.innerHTML = combined;
            }

            console.log(check("Denis", "12345"));
            
