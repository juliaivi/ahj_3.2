!function(){"use strict";class t{constructor(t){this.text=t}addTaskAll(){const t=document.querySelector(".alltasks__list"),s=`\n                  <li class="item">\n                    <label>\n                      <span>${this.text}</span>\n                      <input type="checkbox" class="checkbox">\n                    </label>\n                  </li>\n           `;t.insertAdjacentHTML("beforeend",s)}}(new class{constructor(){this.counter=0,this.container=document.querySelector(".container"),this.allTasks=document.querySelector(".all-tasks"),this.pinnedTasks=document.querySelector(".pinned-tasks"),this.pinnedList=document.querySelector(".pinned__list"),this.alltasksList=document.querySelector(".alltasks__list"),this.allItem=this.allTasks.querySelectorAll(".item"),this.input=this.container.querySelector(".input")}init(){this.input.addEventListener("keydown",(t=>this.onEnter(t))),this.input.addEventListener("input",(t=>this.onInput(t))),this.container.addEventListener("change",(t=>this.addPinnedList(t)))}onInput(t){this.container.querySelector(".mistake").classList.add("hidden"),""===this.input.value&&0===this.allItem.length&&this.allTasks.querySelector(".no-tasks").classList.remove("hidden"),this.filterEl(this.input.value,t)}onEnter(s){"Enter"===s.key&&(""===s.target.value?this.container.querySelector(".mistake").classList.remove("hidden"):(this.creatElement=new t(this.input.value),this.creatElement.addTaskAll(),this.input.value="",this.position+=1,this.addHidden(this.allTasks),this.heddenEl()))}addHidden(t){t.querySelector("li")?t.querySelector(".no-tasks").classList.add("hidden"):t.querySelector(".no-tasks").classList.remove("hidden")}heddenEl(){this.alltasksList.querySelectorAll(".item").forEach((t=>{t.classList.contains("hidden")&&t.classList.remove("hidden")}))}addPinnedList(t){const s=t.target;this.alltasksListElem=s.closest(".alltasks__list"),this.pinnedListsElem=s.closest(".pinned__list"),this.checkbox=Array.from(this.container.querySelectorAll(".checkbox")),t.target.checked&&this.alltasksList&&this.movingElements(s,this.allTasks,this.pinnedTasks),!t.target.checked&&this.pinnedList&&this.movingElements(s,this.pinnedTasks,this.allTasks)}movingElements(t,s,e){const i=t.closest(".item");null!==i&&(this.li=i.cloneNode(!0),i.remove()),null!==this.alltasksListElem&&this.pinnedList.append(this.li),null!==this.pinnedListsElem&&this.alltasksList.append(this.li),this.addHidden(e),this.addHidden(s)}filterEl(t,s){this.alltasksList.querySelectorAll("span").forEach((s=>{s.textContent.toLowerCase().includes(t.toLowerCase())?(s.closest(".item").classList.remove("hidden"),this.counter+=1):s.closest(".item").classList.add("hidden")})),0===this.counter&&this.allTasks.querySelector(".no-tasks").classList.remove("hidden"),null===s.data&&this.counter>0&&null!==t&&this.allTasks.querySelector(".no-tasks").classList.add("hidden"),this.counter=0}}).init()}();