// JavaScript Document

window.onload = function () {

    "use strict";
    // Globals
    // stores initial key objs
    var keyInitA;
    
    // get UI elements
    var startbox = document.getElementById('startbox');
    
    var keybox = document.getElementById('keybox');
    //console.log(keybox.childNodes[0]);
    var myPhrase = document.getElementById('myPhrase');

    /**************************** setup ***********************/
    startbox.setAttribute("class", "scene1");
    
    // capture initial string and hide field
    var getPhrase = function () {
        var guessStr = myPhrase.value;
        myPhrase.value = blankStr(guessStr);
        //console.log(guessStr);
        startbox.setAttribute("class", "scene2");
        startbox.childNodes[1].innerHTML = "";
        keyBoxSetup();
        
    }
    // capture the word from user1
    var startbtn = document.getElementById("startbtn");
    startbtn.addEventListener('mousedown', getPhrase);

    /***************************** update ***********************/
    var btnClick = function (e) {
        var btn = e.target;
        btn.setAttribute("class", "red");
        //btn.setAttribute("disabled", "");
        btn.removeEventListener("click", btnClick);

        //console.log(btn.id);
    };
    /***************************** new game ***********************/


    // remove children from keyrow0-2 (does not remove eventlisteners)
    var removeKeys = function () {
        for (var i = 0; i < 3; i++) {
            var box = document.getElementById("keyrow" + i);
            while (box.firstChild) {
                box.removeChild(box.firstChild);
            }

        }
    };
   
    //removeKeys();
    
    /***************************** workers ***********************/
    // make key objects and array
    var keyBoxSetup = function () {
        var lettersA = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
        // key object stores changing properties of each key
        var Key = function () {
            this.id;
            this.row;
            this.class;
            this.isActive = true;
            return this;
        };
        // array of key objects
        var keyA = [];
        var rowInds = [1,3,5];
        // for each keyboard row 0, 1, or 2
        for (var i = 0; i < lettersA.length; i++) {
            // for each letter in the row
            for (var j = 0; j < lettersA[i].length; j++) {
                var key = new Key();
                key.id = lettersA[i].substr(j, 1);
                key.row = rowInds[i];
                key.class = "gray";
                keyA.push(key);
            }
        }
        // store initial state
        keyInitA = keyA;
        // ready to make keys
        makeKeys();
    }
    // add all keys
    var makeKeys = function () {
        for (var i = 0; i < keyInitA.length; i++) {
            addKey(keyInitA[i]);
        }
    }
    // add one key
    function addKey(key) {

        //Create <button type="button" id="a" style="height:40px" disabled="">a</button>
        var element = document.createElement("button");
        var label = document.createTextNode(key.id);

        //Assign different attributes to the element.
        element.appendChild(label);
        element.setAttribute("type", "button");
        element.setAttribute("id", key.id);
        element.setAttribute("class", key.class);
        element.addEventListener("click", btnClick);
        //Append the element in page
        keybox.childNodes[key.row].appendChild(element);
    }

    // create start string
    var blankStr = function(s){
        var len = s.length;
        var blanks = "";
        for (var i=0;i<len;i++){
            blanks+="_ ";
        }
        return blanks;
    }
};