import { Component, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model'

@Component({
  selector: 'cms-document-list',
  standalone: false,
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css',
})
export class DocumentListComponent {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  
  documents: Document[] = [
    new Document(
      1,
      'name',
      'description of the document goes here',
      'file/document',
      ['null']
    ),
    new Document(
      2,
      'name2',
      'description of document number 2 goes here',
      'file/document2',
      ['null']
    ),
    new Document(
      3,
      'name3',
      'description of document number 3 goes here',
      'file/document3',
      ['null']
    ),
    new Document(
      4,
      'name4',
      'description of document number 4 goes here',
      'file/document4',
      ['null']
    ),
  ];

  onSelectedDocument(document: Document) {
   this.selectedDocumentEvent.emit(document);
  }
}
