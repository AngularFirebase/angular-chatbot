import { TestBed, inject } from '@angular/core/testing';

import { MarkdownService } from './markdown.service';

describe('MarkdownService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkdownService]
    });
  });

  it('should be created', inject([MarkdownService], (service: MarkdownService) => {
    expect(service).toBeTruthy();
  }));
});
