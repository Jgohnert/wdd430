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
      'description',
      'file/document',
      ['null']
    ),
    new Document(
      2,
      'name2',
      'description2',
      'file/document2',
      ['null']
    ),
    new Document(
      3,
      'name3',
      'description3',
      'file/document3',
      ['null']
    ),
    new Document(
      4,
      'name4',
      'description4',
      'file/document4',
      ['null']
    ),
  ];

  onSelectedDocument(document: Document) {
   this.selectedDocumentEvent.emit(document);
  }
}
