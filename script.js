function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

$(document).ready(async function () {
  let Console = $("#console");
  await Type("Loading...", 300);
  setTimeout(async function(){
    document.title = "SudhanPlayz Website 🤗"
    $('link[rel=icon]').attr('href', '/Logo.jpg');
    await Type("Thanks for coming here 🤗", 120);
    setTimeout(function(){
      Continue()
    }, 1500)
  }, 3500);

  async function Continue(){
    await Type("Im Sudhan, 14 year old developer who loves to code with Javascript", 75)
    setTimeout(async function(){
      await Type("and more!", 100, "Im Sudhan, 14 year old developer who loves to code with Javascript <br>")
      setTimeout(async function(){
        await Type("There is a cool update coming on this website soon", 100)
        setTimeout(async function(){
          await Type("... and thanks for waiting these much time lol", 125, "There is a cool update coming on this website soon")
        }, 5000)
      }, 10000)
    }, 2500)
  }

  async function Type(text, duration, defaultText) {
    if(!defaultText)defaultText = ""
    return new Promise(function (resolutionFunc, rejectionFunc)  {
      text = [defaultText].concat(text.split(""))
      var i = 0;
      let did = "";
      let ThisTimeout = function () {
        did = did + text[i];
        if (i === text.length) return resolutionFunc();
        i++;
        setTimeout(function () {
          Console.html(did + '<span class="WaitingAnim">_</span>');
          ThisTimeout();
        }, duration);
      };
      if(ThisTimeout() === true)return true
    });
  }
});
