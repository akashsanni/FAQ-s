// const questionContainer = document.getElementsByClassName('question-container')

// for(i=0;i<questionContainer.length;i++){

//     questionContainer[i].addEventListener('click',function(){
//         this.classList.toggle('active');
//         // console.log(this.classList)
//      })
// }


const questionContainer = document.getElementsByClassName('question-container')

for(i=0;i<questionContainer.length;i++){

 questionContainer[i].addEventListener('click',function(){

    this.classList.toggle('active')
    // console.log(this.classList)
    })
}



