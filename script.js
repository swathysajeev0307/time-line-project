/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

const timeline = document.getElementById("_timeline");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let step = 1;

function mainCode(){

    circles.forEach((circles,index)=>{
        if(index < step){
            circles.classList.add("active");
        }else{
            circles.classList.remove("active");
        }
    });

    const actives = document.querySelectorAll(".active");
    timeline.style.width = `${
        ((actives.length - 1) / (circles.length - 1)) * 100
    }%`;

    if(step === 1){
        prev.disabled = true;
    }else if(step === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }

}

next.addEventListener("click",()=>{

    step++;
    if(step > circles.length){
        step = circles.length;
    }

    mainCode();

});

prev.addEventListener("click", ()=>{

    step--;

    mainCode();
});