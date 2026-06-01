import { Injectable, EventEmitter } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Document } from './document.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class DocumentService {
  documentListChangedEvent = new Subject<Document[]>();
  documentSelectedEvent = new EventEmitter<Document>();
  documentChangedEvent = new EventEmitter<Document[]>();

  maxDocumentId!: number
  

  documents: Document [] = [];

  constructor() {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
  }

  getDocuments() {
      return this.documents.slice();
  }
  
  getDocument(id: string): Document {
    for (let document of this.documents) {
      if (document.id === id) {
        return document;
      }
    }
    return null;
  }

  getMaxId(): number {
    let maxId = 0

    this.documents.forEach(document => {
      const currentId = parseInt(document.id);

      if ( currentId > maxId ) {
        maxId = currentId
      }
    });

    return maxId;
  }

  addDocument(newDocument: Document) {
    if ( !newDocument ) {
      return;
    }

    this.maxDocumentId++
    newDocument.id = String(this.maxDocumentId);

    this.documents.push(newDocument);

    const documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if ( !originalDocument || !newDocument ) {
      return;
    }

    const pos = this.documents.indexOf(originalDocument)

    if ( pos < 0 ) {
      return;
    }

    newDocument.id = originalDocument.id;

    this.documents[pos] = newDocument;

    const documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
  }

  deleteDocument(document: Document) {
    if ( !document ) {
      return;
    }

    const pos = this.documents.indexOf(document)
    if ( pos < 0 ) {
      return;
    }

    this.documents.splice(pos, 1);

    const documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
  }
}
