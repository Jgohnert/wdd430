import { Component, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model'
import { DocumentService } from '../document';

@Component({
  selector: 'cms-document-list',
  standalone: false,
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css',
})
export class DocumentListComponent {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  
  documents: Document[] = []

  constructor(public documentService: DocumentService) {}

  ngOnInit() {
    this.documents = this.documentService.getDocuments();
  }

  onSelectedDocument(document: Document) {
   this.selectedDocumentEvent.emit(document);
   
  }
}
