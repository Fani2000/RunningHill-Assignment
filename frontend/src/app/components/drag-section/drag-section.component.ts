import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {CdkDragDrop, transferArrayItem, moveItemInArray} from '@angular/cdk/drag-drop';
import { Word } from 'src/app/models/Word';
import { WordsServiceService } from 'src/app/services/words-service.service';

@Component({
  selector: 'app-drag-section',
  templateUrl: './drag-section.component.html',
  styleUrls: ['./drag-section.component.css']
})

export class DragSectionComponent implements OnInit {
  constructor(private wordsServices: WordsServiceService) {}

  ngOnInit(): void {
    this.wordsServices.getWords().subscribe((data) => {
      console.log(data)
      data.forEach((w: {type: string, word: string}) => {
        console.log(w)
        this.words.push({type: w.type, word: w.word})
      })
    })
  }
  words: Word[] = []
  constructedSentence: Word[] = []
  correctSentence: string = ""

  drop(event: CdkDragDrop<Word[]>){
    // console.log(event.container, event.container.data.length)
   transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.container.data.length) 
  }

  onSubmitSentence(){
    const newSentence = this.constructedSentence.map(w => w.word).join(" ")
    // console.log(this.wordsServices.getCorrectSentence(), newSentence)
    this.wordsServices.submitSentence(newSentence)
  }
}
