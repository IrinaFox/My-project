'use strict';

var editTpl = `<div class="editDiv">
                        <div class="labelEdit">Name</div>
                        <input type="text" name="name" value=":name" class="editElement">
                        <div class="labelEdit">Last name</div>
                        <input type="text" name="lastName" value=":lastName" class="editElement">
                        <div class="labelEdit">Gender</div>
                        <input type="text" name="gender" value=":gender" class="editElement">
                        <div class="labelEdit">Skype</div>
                        <input type="text" name="skype" value=":skype" class="editElement">
                        <div class="labelEdit">Phone</div>
                        <input type="text" name="phone" value=":phone" class="editElement">
                        <div class="labelEdit">Email</div>
                        <input type="text" name="email" value=":email" class="editElement">
               </div>`;

var buttonTpl = `<input type="button" value="Close" class="buttonClose">
                <input type="button" value="Save" class="buttonSave">`;
