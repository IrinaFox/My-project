'use strict';

tpl.StudentListInfo = `<div id="infoWindowList"> <div class="infoDiv">Name: <%= name %></div>
                     <div class="infoDiv">Last name:  <%= lastName%> </div>
                     <div class="infoDiv">Gender:  <%= gender%> </div>
                     <div class="infoDiv">Age:  <%= age%> </div>
                     <div class="infoDiv">Skype:  <%= skype%> </div>
                     <input type="button" value="Close" class="buttonClose close"/> </div>`;