import { Injectable } from '@angular/core';
import { Word } from '../models/Word';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface InnerContentType {
  _id: string;
  _type: string;
  word: string;
}

interface WordRequestType {
  words: InnerContentType[];
  correctSentences: [string];
  _id: string;
}
interface ResponseType {
  status: Number;
  words: WordRequestType[];
}

interface SentenceType {
  _id: string;
  sentence: string;
  isCorrect: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class WordsServiceService {
  private _words: Word[] = [];
  private _id: string = '';
  private words: Subject<Word[]> = new Subject<Word[]>();
  private sentences: Subject<string[]> = new Subject<string[]>();
  private correctSentence: string[] = [];
  private _sentences: string[] = [];
  // private writtenSentences: Subject<string[]> = new Subject()
  private apiBaseUrl = 'http://localhost:4000/api/v1/';

  constructor(private http: HttpClient) {}

  getCorrectSentence() {
    return this.correctSentence;
  }

  getWords() {
    this.http
      .get<ResponseType>(`${this.apiBaseUrl}/words`)
      .subscribe((words) => {
        // console.log(words.words[1]);
        this.correctSentence = words.words[1].correctSentences;
        this._id = words.words[1]._id;
        this._words = words.words[1].words.map((w) => {
          return {
            type: w._type,
            word: w.word,
          };
        });
        this.words.next([...this._words]);
      });
    return this.words;
  }

  getSentences() {
    this.http
      .get<{sentences: SentenceType[], status: number}>(`${this.apiBaseUrl}/sentences`)
      .subscribe((sentences) => {
        this._sentences = sentences.sentences.map((s) => s.sentence)
        this.sentences.next([...this._sentences])
      });
    return this.sentences.asObservable();
  }

  submitSentence(sentence: string) {
    this._sentences.push(sentence);
    this.sentences.next([...this._sentences]);
    this.http
      .post(`${this.apiBaseUrl}/sentences`, {
        sentence: sentence,
        id: this._id,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
