import { Injectable } from '@angular/core';
import { Word } from '../models/Word';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WordsServiceService {
  private _words: Word[] = [];
  private words: Subject<Word[]> = new Subject<Word[]>();
  private sentences: Subject<string[]> = new Subject<string[]>();
  private correctSentence: string[] = [];
  private _sentences: string[] = [];
  private apiBaseUrl = 'http://localhost:4000/api/v1/';

  constructor(private http: HttpClient) {}

  getCorrectSentence(){
    return this.correctSentence;
  }

  getWords() {
    this.http
      .get<{
        status: Number;
        words: [{ words: [{_id:string,_type: string, word: string}]; correctSentences: [string] }];
      }>(`${this.apiBaseUrl}/words`)
      .subscribe((words) => {
        this.correctSentence = words.words[0].correctSentences;
        this._words = words.words[0].words.map((w) => {
          return {
            type: w._type,
            word: w.word
          }
        });
        this.words.next([...this._words]);
      });
    return this.words;
  }

  submitSentence(sentence: string) {
    this._sentences.push(sentence);
    this.sentences.next([...this._sentences]);
  }
}
