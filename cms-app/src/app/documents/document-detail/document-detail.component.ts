import { Component, OnInit } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WindRefServive } from '../../wind-ref.service';

@Component({
  selector: 'cms-document-detail',
  standalone: false,
  templateUrl: './document-detail.component.html',
  styleUrl: './document-detail.component.css',
})
export class DocumentDetailComponent implements OnInit {
  nativeWindow: any;
  document: Document;

  constructor(private documentService: DocumentService,
    private windowRefService: WindRefServive,
    private router: Router,
    private route: ActivatedRoute) {
      this.nativeWindow = windowRefService.getNativeWindow();
    }

    ngOnInit() {
      this.route.params
      .subscribe(
        (params: Params) => {
          const id = params['id'];
          this.document = this.documentService.getDocument(id);
          this.nativeWindow = this.windowRefService.getNativeWindow();
        }
      );
    }

    onView() {
      if (this.document.url) {
        this.nativeWindow.open(this.document.url);
      }
    }

    onDelete() {
      this.documentService.deleteDocument(this.document);
      this.router.navigate(['/documents']);
    }
}
