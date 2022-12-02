import { Component, Input, OnInit } from '@angular/core';
import { WordsServiceService } from 'src/app/services/words-service.service';

@Component({
  selector: 'app-submited-sentences',
  templateUrl: './submited-sentences.component.html',
  styleUrls: ['./submited-sentences.component.css']
})
export class SubmitedSentencesComponent implements OnInit {
  sentences: string[] = []
  constructor(private wordsServices: WordsServiceService) {}

 ngOnInit(): void {
    this.wordsServices.getSentences().subscribe((data) => {
      console.log(data)
      this.sentences = data
    })
 }
}
