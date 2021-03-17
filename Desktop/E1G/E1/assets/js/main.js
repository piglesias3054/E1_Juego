window.onload = function () {



  // Audio











  // Data








  const position = { x: 0, y: 0 }

  interact('.draggable').draggable({
    listeners: {
      start(event) {
        console.log(event.type, event.target)
      },

      move(event) {
        position.x += event.dx
        position.y += event.dy

        event.target.style.transform =
          `translate(${position.x}px, ${position.y}px)`
      },
    }
  })



  // DRAG



  // DROP



  interact('.gameItem').dropzone({
    ondrop: function (event) {
      //alert(event.relatedTarget.id
      //// + event.target.id)
    }
  })

    .on('dropactivate', function (event) {
      event.relatedTarget.classList.add('dragActivated')
    })

    .on('dropdeactivate', function (event) {
      event.relatedTarget.classList.remove('dragActivated')
    })



  // LEVEL1


  // Apple Answer


  interact('#apple1').dropzone({
    accept: '#apple2',
  })

    .on('dragenter', function (event) {
      event.target.classList.add('correctAnswer')
      event.target.classList.add('point')
    })

    .on('dragleave', function (event) {
      event.target.classList.remove('correctAnswer')
    })


  // Pear Answer

  interact('#pear1').dropzone({
    accept: '#pear2',
  })

    .on('dragenter', function (event) {
      event.target.classList.add('correctAnswer')
      event.target.classList.add('point')
    })

    .on('dragleave', function (event) {
      event.target.classList.remove('correctAnswer')
    })


  // Cherry Answer

  interact('#cherry1').dropzone({
    accept: '#cherry2',
  })

    .on('dragenter', function (event) {
      event.target.classList.add('correctAnswer')
      event.target.classList.add('point')
    })

    .on('dragleave', function (event) {
      event.target.classList.remove('correctAnswer')
    })


  // Orange Answer

  interact('#orange1').dropzone({
    accept: '#orange2',
  })

    .on('dragenter', function (event) {
      event.target.classList.add('correctAnswer')
      event.target.classList.add('point')
    })

    .on('dragleave', function (event) {
      event.target.classList.remove('correctAnswer')
    })

  // Watermelon Answer

  interact('#watermelon1').dropzone({
    accept: '#watermelon2',
  })

    .on('dragenter', function (event) {
      event.target.classList.add('correctAnswer')
      event.target.classList.add('point')
    })

    .on('dragleave', function (event) {
      event.target.classList.remove('correctAnswer')
    })


  // LEVEL2


  // Happy Answer


  interact('#happy1').dropzone({
    accept: '#happy2',
  })

    .on('dragenter', function (event) {
      event.target.classList.add('correctAnswer')
      event.target.classList.add('point')
    })

    .on('dragleave', function (event) {
      event.target.classList.remove('correctAnswer')
    })


  // Sad Answer

  interact('#sad1').dropzone({
    accept: '#sad2',
  })

    .on('dragenter', function (event) {
      event.target.classList.add('correctAnswer')
      event.target.classList.add('point')
    })

    .on('dragleave', function (event) {
      event.target.classList.remove('correctAnswer')
    })


  // Angry Answer

  interact('#angry1').dropzone({
    accept: '#angry2',
  })

    .on('dragenter', function (event) {
      event.target.classList.add('correctAnswer')
      event.target.classList.add('point')
    })

    .on('dragleave', function (event) {
      event.target.classList.remove('correctAnswer')
    })


  // Surprised Answer

  interact('#surprise1').dropzone({
    accept: '#surprise2',
  })

    .on('dragenter', function (event) {
      event.target.classList.add('correctAnswer')
      event.target.classList.add('point')
    })

    .on('dragleave', function (event) {
      event.target.classList.remove('correctAnswer')
    })

  // Fear Answer

  interact('#fear1').dropzone({
    accept: '#fear2',
  })

    .on('dragenter', function (event) {
      event.target.classList.add('correctAnswer')
      event.target.classList.add('point')
    })

    .on('dragleave', function (event) {
      event.target.classList.remove('correctAnswer')
    })






  // Switch Level

  let animals = document.querySelector('#level2')
  let fruit = document.querySelector("#level1")
  let start = document.querySelector("#gameStart")
  let pointCheck = document.querySelector("#pointCheck")
  let drag1 = document.querySelector("#drag1")
  let drag2 = document.querySelector("#drag2")



  $("#button1").on("click", function () {

    fruit.classList.remove("remove")
    animals.classList.add("remove")
    start.classList.add("remove")
    drag1.classList.remove("remove")
    drag2.classList.add("remove")
    pointCheck.classList.add("remove")


  });

  $("#button2").on("click", function () {

    fruit.classList.add("remove")
    animals.classList.remove("remove")
    start.classList.add("remove")
    drag1.classList.add("remove")
    drag2.classList.remove("remove")
    pointCheck.classList.add("remove")


  });

  $("#button3").on("click", function () {

    fruit.classList.add("remove")
    animals.classList.add("remove")
    start.classList.remove("remove")
    drag1.classList.add("remove")
    drag2.classList.add("remove")
    pointCheck.classList.add("remove")


  });



  // Counter





  /*
    let counter = () => {
   
       for (let i = 0; i <= numItems; i++) {
        return numItems[i]
      }; 
    }
  */



  function value() {

    numItems = $('.point').length
    return numItems

  }

  value()



$("#button4").on("click", function () {

  start.classList.add("remove")
  fruit.classList.add("remove")
  animals.classList.add("remove")
  drag1.classList.add("remove")
  drag2.classList.add("remove")
  pointCheck.classList.remove("remove")

  $("#points").html('<p>You got ' + value() + ' right!</p> <p>Only ' + (10 - value()) + ' left to go!</p> ');


});




}

