function sleep(milliseconds) {
  return new Promise(res => setTimeout(res, milliseconds))
}
$("#pog").hide()
$(document).ready(async function () {
  $("#logo").hide()
  $("#logo").attr("src", "/assets/Logo.jpg")
  $("#FlyingConsole").hide()
  $("#FlyingConsole").attr("src", "/assets/Console.png")
  $("#terminal").hide()
  let Console = $("#console");
  await Type("Loading...", 350);
  await Type("New website is coming on the way...", 500)
  await sleep(2000)
  await Type("If you are bored you can check out the website below", 1500)
  $("#pog").show("fade")

  /* i cant forgot my old beautifull coding so...
  $("#FlyingConsole").show("slow")
  setTimeout(async function(){
    document.title = "SudhanPlayz Website 🤗"
    $('link[rel=icon]').attr('href', '/assets/Logo.jpg');
    $("#FlyingConsole").hide("slow")
    await Type("Thanks for visiting this website 🤗", 120);
    setTimeout(function(){
      Continue()
      $("footer").hide()
      $("footer").append(`<h1 class="WhiteText">Social Media:</h1>
      <span class="FooterIcons" color="white" style="font-size: 40px">
        <a href="https://discord.gg/a9SHDpD"><i class="fab fa-discord"></i></a>
        <a href="https://youtube.com/CodingWithSudhan"><i class="fab fa-youtube"></i></a>
        <a href="https://github.com/SudhanPlayz"><i class="fab fa-github"></i></a>
      </span>
      <br>
      <span class="WhiteText">Made by Sudhan &lt;3 </span>`)
      $("footer").show('slow');
    }, 1500)
  }, 3500);

  async function Continue(){
    $("#logo").show("slow")
    await Type("Im Sudhan, 14 year old developer who loves to code with Javascript", 75)
    setTimeout(async function(){
      await Type("and more!", 100, "Im Sudhan, 14 year old developer who loves to code with Javascript <br>")
      setTimeout(async function(){
        $("#logo").hide("slow")
        await Type("Opening Terminal...", 100)
        setTimeout(function(){
          OpenTerminal()
        }, 5000)
      }, 7000)
    }, 2500)
  }

  async function OpenTerminal(){
    //Opening Terminal
    await Type("terminal.exe", 120)
    $("footer").hide("slow")
    $("#ConsoleImage").hide("fast")
    $("#ConsoleImage").attr("src", "/assets/Console.png")
    $("#ConsoleImage").show("slow")
    document.title = "terminal.exe"
    $('link[rel=icon]').attr('href', '/assets/Console.png');
    $("#terminal").append(`
    <div id="deadCommands">
    <span class="command-response">So I made this ubuntu terminal using my html,css,js skills. <br><span class="command-response"></span>Please add a star on <a href="https://github.com/SudhanPlayz/Website" style="color: pink;text-decoration: none;">GitHub</a>! Thank you for using this trash terminal 😁</span>
  </div>
  <div id="command">
    <span id="user">root@SudhanPC:~$</span>
    <input id="command-input" type="text">
  </div>
`)
    $("#terminal").show("slow")

    //So the terminal is here ;-;
    function addDeadCommand(command, CommandResponse){
      if(command === "clear")return
      $("#command-input").val("")
      $("#deadCommands").append(`
      <div>
      <span id="user">root@SudhanPC:~$</span>
      <span>${command}</span>
      <br>
      <span class="command-response">${CommandResponse}</span>
    </div>
`)
    }

    $("#command-input").on('keyup', async function (e) {
      if (e.key === 'Enter' || e.keyCode === 13) {
        //You just pressed the enter key so its time to run the command ;-;
        let command = $("#command-input").val()
        if(!command || command === "")return
        let CommandResponse = await RunCommand(command)
        addDeadCommand(command, CommandResponse)
      }
    });
  }

  //Making commands here
  async function RunCommand(Command){
    Command.replace("<br>", '<span class="command-response"></span>')
    let args = Command.split(" ")//this called as args lol
    let command = args[0]
    args.shift()

    if(command === "help"){
      return `All Commands here you are running are case sensitive<br><span class="command-response">help, clear, sudhan, echo</span>`
    }else if(command === "clear"){
      $("#deadCommands").html("")
      $("#command-input").val("")
    }else if(command === "sudhan"){
      let NiceWords = ["Sudhan is epic", "Sudhan has built/coded this using html, css, js, jquery, font awesome icons", "Sudhan is OP", "Sudhan says ';-;'"]
      let word = NiceWords[Math.floor(Math.random() * NiceWords.length)];
      return word
    }else if(command === "echo"){
      if(args.length === 0)return "There is nothing to repeat what you say try using 'echo Hello World!'"
      else return args.join(" ")
    }else if(command === "sudo"){
      return "Why you wanted to use sudo when you are already on root ;-;"
    }else if(command === "set"){
      if(args[0] === "title"){
        args.shift()
        let title = args.join(" ")
        document.title = title
        await Type(title, 100);
        $("#ConsoleImage").attr("src", "/assets/Console.png")
        $("#ConsoleImage").show("slow")
        return "Successfully changed title to "+title
      }else return "set Commands are title | Use it by like set title <args>"
    }else return `Command: ${command} not found. Please use help to recieve all commands`
  }

  */

  //Note: This is completly made by me fr more than 3 hours of work ;-;
  async function Type(text, duration, defaultText) {
    if(!defaultText)defaultText = ""
    //Sending a promise so we can use await
    return new Promise(function (resolutionFunc, rejectionFunc)  {
      text = [defaultText].concat(text.split(""))
      var i = 0;
      let did = "";
      let ThisTimeout = function () {
        did = did + text[i];
        if (i === text.length) return resolutionFunc();
        i++;
        setTimeout(function () {
          Console.html('<img width="35" id="ConsoleImage"><span class="command-response"></span>'+did + '<span class="WaitingAnim">_</span>');
          ThisTimeout();
        }, duration);
      };
      if(ThisTimeout() === true)return true
    });
  }
});
