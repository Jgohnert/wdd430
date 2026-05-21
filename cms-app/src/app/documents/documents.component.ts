import { Component } from '@angular/core';
import { Document } from './document.model';
import { DocumentService } from './document.service';

@Component({
  selector: 'document-list',
  standalone: false,
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css',
})
export class DocumentsComponent {
  selectedDocument: Document;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
      this.documentService.documentSelectedEvent
        .subscribe(
          (recipe: Document) => {
            this.selectedDocument = recipe;
          }
        );
    }
}
