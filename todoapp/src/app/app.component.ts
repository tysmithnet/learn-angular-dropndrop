import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
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
    const col:  Column = {
      cards: [],
      id: 10,
      sortOrder: 1,
      title: this.newColumnText!
    };
    this.selectedBoard?.columns.push(col);
    this.newColumnText = "";
  }
  
  deleteCard(column: Column, card: Card) {
    let idx = column.cards.findIndex(c => c == card);
    if (idx > -1) {
      column.cards.splice(idx, 1);
    }
  }
  addCard(column: Column) {
    column.cards.splice(0, 0, {
      title: "",
      id: 10,
      sortOrder: 0,
    })
  }
  deleteBoard(board: Board) {
    const boardIdx = this.boards.indexOf(board);
    if (boardIdx < 0) return;
    this.boards.splice(boardIdx, 1);
    if (this.boards.length) {
      this.selectBoard(this.boards[0]);
    } else {
      this.selectBoard(undefined);
    }
  }
}
