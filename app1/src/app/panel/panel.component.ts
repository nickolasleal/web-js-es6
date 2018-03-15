import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Sentence } from '../shared/sentence.model'
import { SENTENCES } from './mock-data'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public sentences: Array<Sentence> = SENTENCES
  public instruction: string = 'Translate the following sentence to brazilian portuguese'
  public answer: string = ""

  public round: number = 0
  public roundsSentence: Sentence

  public attempts: number = 3

  public progress: number = 0;

  @Output() public finishGame: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.updateRound()
  }

  ngOnInit() {
  }

  public updateAnswer(resposta: Event): void {
    this.answer = (<HTMLInputElement>resposta.target).value
  }

  public updateRound(): void {
    this.roundsSentence = this.sentences[this.round] ? this.sentences[this.round] : new Sentence("", "")
  }

  public verifyAnswer(): void {
    if (this.answer === this.roundsSentence.sentencePtBr) {
      this.progress = this.progress + (100 / this.sentences.length)
      if (++this.round === this.sentences.length) {
        this.finishGame.emit("success")
      } else {
        this.updateRound()
      }
    } else if (--this.attempts < 0) {
      this.finishGame.emit("failure")
    }

    this.answer = ""
  }
}
