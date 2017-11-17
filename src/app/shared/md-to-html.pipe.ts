import { Pipe, PipeTransform } from '@angular/core';
import { MarkdownService } from '../chat/markdown.service';

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  constructor(private markdown:  MarkdownService) {}
  transform(value: string): any {
    return this.markdown.markdownToHtml(value);
  }

}
