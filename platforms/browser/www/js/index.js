/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    //click function to show the side menu 
    // Bind Event Listeners

    /*openSidenav: function() {
      var humbergerClick = document.getElementById("SideNav").classList;
      document.getElementById("nav-mobile").style.transform = "translateX(0px)";
      document.getElementById("nav-mobile").classList.toggle('open');
      if (humbergerClick.contains("close")) {
        humbergerClick.remove("close");
      } else {
        humbergerClick.add("close");
      }
      if (humbergerClick.contains("open")) {
        humbergerClick.remove("open");
      } else {
        humbergerClick.add("open");
      }
    },*/
    contactUs: function(a,b,c,d) {
      var fname = document.getElementById(a).value;
      var lname = document.getElementById(b).value;
      var email = document.getElementById(c).value;
      //var msg   = document.getElementById(d).value;
      if(fname == "" || lname == "" || email == "" ) {
        alert("Pleae make sure all fields are fill");
        return;
      }
      var atpos = email.indexOf("@");
      var dotpos = email.lastIndexOf(".");
      if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        alert("Not a valid e-mail address");
        return false;
      }
       var xhttp;
       xhttp = new XMLHttpRequest();
       var data = "fname=" +fname + "&lname="+ lname + "&email="+email ;
       xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
          alert(xhttp.responseText);
           
         }
       };
       xhttp.open("POST", 'http://localhost:8080/chatbox/hw.php', true);
       xhttp.send(data);
    },

    

};
