'use strict';

tpl.CountryListItem = `<div class="miniDiv name"><%= country %></div>
               <div class="miniDiv population"><%= population%></div>
               <div class="miniDiv area"><%= area%></div>
               <div class="miniDivButton"><input type="button" name="like" value="Like" class="button like"/></div>
               <div class="miniDivButton"><input type="button" name="dislike" value="Dislike" class="button dislike"/></div>
               <div class="miniDivButton"><input type="button" name="delete" value="Delete" class="button delete"/></div>`;