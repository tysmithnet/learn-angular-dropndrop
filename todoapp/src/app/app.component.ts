import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Board, Column, Card, DUMMY_BOARDS} from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'todoapp';
  boards: Board[] = DUMMY_BOARDS;
  selectedBoard: Board | undefined;
  newColumnText: string | undefined;
  selectBoard(board: Board | undefined) {
    this.selectedBoard = board;
  }
  ngOnInit(): void {
    // get boards
    this.selectBoard(DUMMY_BOARDS[0])
  }
  drop(event: CdkDragDrop<Card[] | undefined>) {
    if(!event.container.data) return;
    if(!event.previousContainer.data) return;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  dropColumn(event: CdkDragDrop<Column[] | undefined>) {
    if(event.previousIndex == event.currentIndex) return;
    moveItemInArray(this.selectedBoard?.columns!, event.previousIndex, event.currentIndex);
  }
  addColumn() {

  }
  deleteCard(column: Column, card: Card) {
    let idx = column.cards.findIndex(c => c == card);
    if (idx > -1) {
      column.cards.splice(idx, 1);
    }
  }
}
