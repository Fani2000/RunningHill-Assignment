import { Component } from '@angular/core';
import {CdkDragDrop, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-section',
  templateUrl: './drag-section.component.html',
  styleUrls: ['./drag-section.component.css']
})
export class DragSectionComponent {
  words: string[] = ["The", "Was", "Thief", "Police", "Caught", ".", "A"]
  sentence: string[] = []
  correctSentence: string = "The Police Caught A Thief."

  drop(event: CdkDragDrop<string[]>){
   transferArrayItem(event.previousContainer.data,event.container.data, event.previousIndex, event.currentIndex) 
  }
}
