function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6kKSYD8aErV":
        Script1();
        break;
  }
}

function Script1()
{
  //alert("hello");

var player = GetPlayer();
var explorer = player.GetVar("Explorer");
var explorerName= player.GetVar("ExplorerName");
var backpack = player.GetVar("Backpack");
var bagSize = player.GetVar("BagSize");
var numberItems = player.GetVar("NumberItems");
var firstAid = player.GetVar("FirstAid");
var boots = player.GetVar("Boots");
var smallKnife = player.GetVar("SmallKnife");
var knifeRambo = player.GetVar("KnifeRambo");
var torchlight = player.GetVar("Torchlight");
var gourde = player.GetVar("Gourde");
var compass = player.GetVar("Compass");
var tuque = player.GetVar("Tuque");
var piolet = player.GetVar("Piolet");
var cup = player.GetVar("Cup");
var thermos = player.GetVar("Thermos");
var sleepingBag = player.GetVar("SleepingBag");
var mat = player.GetVar("Mat");
var q1Answer = player.GetVar("Q1Answer");
var q2Answer = player.GetVar("Q2Answer");
var q3Answer = player.GetVar("Q3Answer");
var q4Answer = player.GetVar("Q4Answer");
var encrypt = player.GetVar("Encrypt");

//Generate the file
var filecontent = explorer + "," + explorerName + "," + backpack + "," + bagSize + "," + numberItems + "," + firstAid +"," + boots + "," + smallKnife + "," + knifeRambo + "," + torchlight + "," + gourde + "," + compass + "," + tuque + "," + piolet + "," + cup + "," + thermos + "," + sleepingBag + "," + mat + "," + q1Answer + "," + q2Answer + "," + q3Answer + "," + q4Answer ;

alert("File content: " + filecontent);


if (encrypt == true)
  {
    alert("Encrypt:" + encrypt); 
 



//Optional encryption
var crypt = {
  // (B1) THE SECRET KEY
  secret : "CIPHERKEY",
 
  // (B2) ENCRYPT
  encrypt : function (clear) {
    var cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
    cipher = cipher.toString();
    return cipher;
  },
 
  // (B3) DECRYPT
  decrypt : function (cipher) {
    var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
    decipher = decipher.toString(CryptoJS.enc.Utf8);
    return decipher;
  }
};

//Message to crypt

var message = filecontent;

// (C) TEST
// (C1) ENCRYPT CLEAR TEXT
try 
{
	var cipher = crypt.encrypt(message);
	filecontent = cipher;

}
catch (err)
{
	if (err.message == "CryptoJS is not defined")
	{
		alert ("Cannot crypt, use in clear");
        console.log(message);
    }
    else
    {
    console.log (err.message);
    }
}

 }
else
  {
    alert("You want this in clear...bad");
  }



//Generate the file on user system
let a = document.createElement('a');
a.href = "data:application/octet-stream,"+encodeURIComponent(filecontent);
a.download = 'Profile.chr';
a.click();

}

