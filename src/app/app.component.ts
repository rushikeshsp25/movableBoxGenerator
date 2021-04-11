import { Component, HostListener } from '@angular/core';

interface IBox {
  id: number;
  width: number;
  height: number;
  top: number;
  left: number;
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'movableBoxGenerator';
  boxes: IBox[] = [];
  id: number = 1000;
  selectedBoxIndex: number | null = null;

  addNewBox() {
    this.boxes.push({
      id: this.id++,
      width: 20,
      height: 10,
      top: 0,
      left: 0,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
    });
  }

  selectBox(index: number) {
    this.selectedBoxIndex = index;
  }

  clear() {
    this.boxes = []
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown = this.getOnClickHandler();

  getOnClickHandler() {
    return (event: KeyboardEvent) => {
      if (this.selectedBoxIndex !== null) {
        if (event.code === 'ArrowRight' || event.code === 'KeyD') {
          let boxWidth = this.boxes[this.selectedBoxIndex].width
          if (this.boxes[this.selectedBoxIndex].left < 80 - boxWidth)
            this.boxes[this.selectedBoxIndex].left++;
        } else if (event.code === 'ArrowDown' || event.code === 'KeyS') {
          let boxHeight = this.boxes[this.selectedBoxIndex].height
          if (this.boxes[this.selectedBoxIndex].top < 80 - boxHeight)
            this.boxes[this.selectedBoxIndex].top++;
        } else if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
          if (this.boxes[this.selectedBoxIndex].left > 0)
            this.boxes[this.selectedBoxIndex].left--;
        } else if (event.code === 'ArrowUp' || event.code === 'KeyW') {
          if (this.boxes[this.selectedBoxIndex].top > 0)
            this.boxes[this.selectedBoxIndex].top--;
        } else if (event.code === 'Delete') {
          this.boxes.splice(this.selectedBoxIndex, 1);
          this.selectedBoxIndex = null;
        }
      }
    }
  }

  disableListeners(toggle: boolean) {
    if (!toggle) {
      this.onKeyDown = function (): void { };
    } else {
      this.onKeyDown = this.getOnClickHandler();
    }
  }
}
