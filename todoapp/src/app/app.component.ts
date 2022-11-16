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
  selectedBoard: Board | undefined = DUMMY_BOARDS[0];
  newColumnText: string | undefined;
  selectBoard(board: Board | undefined) {
    this.selectedBoard = board;
  }
  ngOnInit(): void {
    // get boards
  }
  drop(event: CdkDragDrop<string[]>) {
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
}
