import { Injectable } from '@angular/core';
import * as marked from 'marked';

@Injectable()
export class MarkdownService {

  renderer: any;

  constructor() {

    this.renderer = new marked.Renderer();
    this.renderer.link = function(href, title, text) {
      var external, newWindow, out;
      external = /^https?:\/\/.+$/.test(href);
      newWindow = external || title === 'newWindow';
      out = "<a href=\"" + href + "\"";
      if (newWindow) {
        out += ' target="_blank"';
      }
      if (title && title !== 'newWindow') {
        out += " title=\"" + title + "\"";
      }
      return out += ">" + text + "</a>";
    };

    marked.setOptions({
      renderer: this.renderer,
      gfm: true
    });
  }


  // convert markdown string to html
  markdownToHtml(md: string) {
    console.log(md);
    return marked(md);
  }

}
