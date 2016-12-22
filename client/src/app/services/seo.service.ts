import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';
import { DetailPost } from '../models/detail-post';

@Injectable()
export class SeoService {
  // <head> Element of the HTML document
  private headElement: HTMLElement;
  private metaOgUrl: HTMLElement;
  private metaOgTitle: HTMLElement;
  private metaOgDescription: HTMLElement;
  private metaOgImage: HTMLElement;

  private DOM: any;

  // Inject the Angular 2 Title Service
  // @param titleService
  constructor() {
    this.DOM = getDOM();

    // get the <head> Element
    // @type {any}
    this.headElement = this.DOM.query('head');
    this.metaOgUrl = this.getOrCreateMetaElement('og:url');
    this.metaOgTitle = this.getOrCreateMetaElement('og:title');
    this.metaOgDescription = this.getOrCreateMetaElement('og:description');
    this.metaOgImage = this.getOrCreateMetaElement('og:image');
  }

  public setMetaOgUrl(url: string) {
    this.metaOgUrl.setAttribute('content', url);
  }

  public setMetaOgTitle(title: string) {
    this.metaOgTitle.setAttribute('content', title);
  }

  public setMetaOgDescription(description: string) {
    this.metaOgDescription.setAttribute('content', description);
  }

  public setMetaOgImage(image: string) {
    this.metaOgImage.setAttribute('content', image);
  }

 /**
  * get the HTML Element when it is in the markup, or create it.
  * @param name
  * @returns {HTMLElement}
  */
  private getOrCreateMetaElement(name: string): HTMLElement {
    let el: HTMLElement;
    el = this.DOM.query('meta[property="' + name + '"]');
    if (el === null) {
      el = this.DOM.createElement('meta');
      el.setAttribute('property', name);
      this.headElement.appendChild(el);
    }
    return el;
  }
}
