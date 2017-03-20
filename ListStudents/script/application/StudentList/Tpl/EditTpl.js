'use strict';

var editTpl = `<div class="editDiv">
                        <div class="labelEdit">Name</div>
                        <input type="text" name="name" value="<%= name%>" class="editElement name">
                        <div class="labelEdit">Last name</div>
                        <input type="text" name="lastName" value="<%= lastName%>" class="editElement lastName">
                        <div class="labelEdit">Gender</div>
                        <input type="text" name="gender" value="<%= gender%>" class="editElement gender">
                        <div class="labelEdit">Skype</div>
                        <input type="text" name="skype" value="<%= skype%>" class="editElement skype">
                        <div class="labelEdit">Phone</div>
                        <input type="text" name="phone" value="<%= phone%>" class="editElement phone">
                        <div class="labelEdit">Email</div>
                        <input type="text" name="email" value="<%= email%>" class="editElement email">
                        <input type="button" value="Close" class="buttonClose close">
                        <input type="button" value="Save" class="buttonSave save">;
               </div>`;