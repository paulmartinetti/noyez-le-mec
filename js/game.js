// JavaScript Document

window.onload = function () {

    "use strict";
    // Globals
    // stores initial key objs
    var keyInitA;
    // string entered by user 1
    var guessStr;
    // startbox
    var startbox = document.getElementById('startbox');

    /**************************** setup ***********************/
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
        // for each keyboard row 0, 1, or 2
        for (var i = 0; i < lettersA.length; i++) {
            // for each letter in the row
            for (var j = 0; j < lettersA[i].length; j++) {
                var key = new Key();
                key.id = lettersA[i].substr(j, 1);
                key.row = i;
                key.class = "gray";
                keyA.push(key);
            }
        }
        // store initial state
        keyInitA = keyA;
    }

    // capture initial string and hide field
    var getPhrase = function () {
        guessStr = document.getElementById('myPhrase').value;
        startbox.style.display = "none";
    }


    /***************************** update ***********************/
    var btnClick = function (e) {
        var btn = e.target;
        btn.setAttribute("class", "red");
        //btn.setAttribute("disabled", "");
        btn.removeEventListener("click", btnClick);

        //console.log(btn.id);
    };
    /***************************** new game ***********************/
    // capture the word from user1
    var startbtn = document.getElementById("startbtn");
    startbtn.addEventListener('mousedown', getPhrase);

    // remove children from keyrow0-2 (does not remove eventlisteners)
    var removeKeys = function () {
        for (var i = 0; i < 3; i++) {
            var box = document.getElementById("keyrow" + i);
            while (box.firstChild) {
                box.removeChild(box.firstChild);
            }

        }
    };
    // add keys
    var makeKeys = function () {
        for (var i = 0; i < keyInitA.length; i++) {
            addKey(keyInitA[i]);
        }
    }
    //removeKeys();
    keyBoxSetup();
    makeKeys();
    /***************************** workers ***********************/
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
        //Append the element in page (in span).
        var box = document.getElementById("keyrow" + key.row);
        box.appendChild(element);
    }

    //addKey("keyrow1",key);
	/*myBox = document.getElementById("myContainer");
	 
	 myH2 = myBox.getElementsByTagName("h3");
	 //console.log(myH2[0].innerHTML);
	 
	 //console.log("element type: ", myBox.nodeType);
	 //console.log("inner html: ", myBox.innerHTML);
	 //console.log("child node: ", myBox.childNodes.length);
	 
	 myBox.onclick = function () {
		myH2[0].style.color = "red";
	 	myH2[1].style.color = "green";
		
		myH2[0].innerHTML += " +new red text here";
		myBox.setAttribute("align", "right");
		
		// create the 
		newElement = document.createElement("h3");
		//myBox.appendChild(newElement);
		myBox.insertBefore(newElement, myH2[1]);
		
		
		
	};*/

};