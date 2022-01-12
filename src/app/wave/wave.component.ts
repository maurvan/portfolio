import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wave',
  templateUrl: './wave.component.html',
  styleUrls: ['./wave.component.sass']
})
export class WaveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// TYPEWRITER
// base code found at https://code-boxx.com/simple-pure-javascript-typewriter-effect/
function typewrite (target:any, text:any, loop:any, speed:any) {
    target = document.getElementById(target)

    let i = 0;
    let timer = setInterval(function(){
        i++;
        if (i <= text.length) {
            target.innerHTML = text.substring(0, i);
        } else {
            if (loop) { i = 0; }
            else { clearInterval(timer); }
        }
    }, speed);
}

window.addEventListener("load", function(){
    typewrite("typewriter", "Maureen Vanhoren", false, 200)
})