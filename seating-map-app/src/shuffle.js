import students from "./students";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function assign() {
    for (var i = 0; i < 14; i++){
        let needle = numbers[i]
        for (var j = 0; j < students.length; j++){
            if (students[j].id == needle){
                if (i = 1){
                    let student1 = students[j].name
                } else if (i = 2) {
                    let student2 = students[j].name
                } else if (i = 3) {
                    let student3 = students[j].name
                } else if (i = 4) {
                    let student4 = students[j].name
                } else if (i = 5) {
                    let student5 = students[j].name
                } else if (i = 6) {
                    let student6 = students[j].name
                } else if (i = 7) {
                    let student7 = students[j].name
                } else if (i = 8) {
                    let student8 = students[j].name
                } else if (i = 9) {
                    let student9 = students[j].name
                } else if (i = 10) {
                    let student10 = students[j].name
                } else if (i = 11) {
                    let student11 = students[j].name
                } else if (i = 12) {
                    let student12 = students[j].name
                } else if (i = 13) {
                    let student13 = students[j].name
                } else if (i = 14) {
                    let student14 = students[j].name
                } else if (i = 15) {
                    let student15 = students[j].name
                }
            }
        }
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
shuffleArray(numbers);

export {shuffleArray, assign};


