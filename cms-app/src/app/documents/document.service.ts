import { Injectable, EventEmitter } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Document } from './document.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class DocumentService {
  documentListChangedEvent = new Subject<Document[]>();
  documentSelectedEvent = new EventEmitter<Document>();
  // documentChangedEvent = new EventEmitter<Document[]>();

  maxDocumentId!: number
  

  documents: Document [] = [];

  constructor(private http: HttpClient) {
    // this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
  }

  storeDocuments() {
    JSON.stringify(this.documents);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.put(
      'https://cms-app-fe1b1-default-rtdb.firebaseio.com/documents.json',
      this.documents,
      { headers: headers }
    )
    .subscribe({
      next: () => {
        console.log('Document has been saved.');
      }
    });
  }

  getDocuments() {
    return this.http
      .get<Document[]>(
          'https://cms-app-fe1b1-default-rtdb.firebaseio.com/documents.json'
      )
      .subscribe(
        (documents: Document[]) => {
          this.documents = documents;
          this.maxDocumentId = this.getMaxId();
  
          this.documents.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            } if (a.name > b.name) {
              return 1;
            } else {
              return 0;
            }
          });
  
          this.documentListChangedEvent.next(this.documents.slice());
        },
        (error: any) => {
          console.error('An Error occured getting documents:', error);
        }
      )
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
    
    this.storeDocuments();
    this.documentListChangedEvent.next(this.documents.slice());
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

    this.storeDocuments();
    this.documentListChangedEvent.next(this.documents.slice());
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

    this.storeDocuments();
    this.documentListChangedEvent.next(this.documents.slice());
  }
}
