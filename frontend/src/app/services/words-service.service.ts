import { Injectable } from '@angular/core';
import { Word } from '../models/Word';
import { Subject, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WordsServiceService {
  private words: Word[] = []; 
  private sentences: Subject<string[]> = new Subject<string[]>();
  private _sentences: string[] = []

  constructor() {}

  getWords() {
    return this.words;
  }

  submitSentence(sentence: string) {
    this._sentences.push(sentence)
    this.sentences.next([...this._sentences])
    console.log(this._sentences);
  }
}
