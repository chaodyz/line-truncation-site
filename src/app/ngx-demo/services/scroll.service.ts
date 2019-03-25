import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { fromEvent } from 'rxjs';

export const topMargin = 16;
export class ScrollService {
  private _topOffset: number | null;
  // Offset from the top of the document to bottom of any static elements
  // at the top (e.g. toolbar) + some margin
  get topOffset() {
    if (!this._topOffset) {
      const toolbar = this.document.querySelector('.app-toolbar');
      this._topOffset = ((toolbar && toolbar.clientHeight) || 0) + topMargin;
    }
    return this._topOffset!;
  }
  constructor(@Inject(DOCUMENT) private document: any) {
    // On resize, the toolbar might change height, so "invalidate" the top offset.
    fromEvent(window, 'resize').subscribe(() => (this._topOffset = null));
  }

  scroll(id) {
    const element: HTMLElement = this.document.getElementById(id);
    this.scrollToElement(element);
  }

  /**
   * Scroll to the element.
   * Don't scroll if no element.
   */
  scrollToElement(element: Element | null) {
    if (element) {
      element.scrollIntoView();

      if (window && window.scrollBy) {
        // Scroll as much as necessary to align the top of `element` at `topOffset`.
        // (Usually, `.top` will be 0, except for cases where the element cannot be scrolled all the
        //  way to the top, because the viewport is larger than the height of the content after the
        //  element.)
        window.scrollBy(0, element.getBoundingClientRect().top - this.topOffset);

        // If we are very close to the top (<20px), then scroll all the way up.
        // (This can happen if `element` is at the top of the page, but has a small top-margin.)
        if (window.pageYOffset < 20) {
          window.scrollBy(0, -window.pageYOffset);
        }
      }
    }
  }
}
