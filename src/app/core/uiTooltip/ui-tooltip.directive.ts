import {AfterViewInit, Directive, ElementRef, Input, OnChanges, Renderer2} from '@angular/core';

@Directive({
  selector: '[uiTooltip]'})
export class UiTooltipDirective implements OnChanges, AfterViewInit{

  @Input('uiTooltip') text: string;

  pageRedenring: boolean;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.render();
  }

  ngOnChanges() {
    if (this.pageRedenring) {
      this.refreshRender();
    }
  }

  refreshRender() {
    const el = this.elementRef.nativeElement.parentNode;
    el.querySelector('.text').innerHTML = this.text;
  }

  render() {
    const content = this.elementRef.nativeElement;
    const parent = content.parentNode;
    const tooltip = this.renderer.createElement('div');
    const textTooltip = this.renderer.createElement('span');
    textTooltip.innerHTML = this.text;
    textTooltip.classList.add('text');
    tooltip.classList.add('tooltip');
    this.renderer.appendChild(tooltip, content);
    this.renderer.appendChild(tooltip, textTooltip);
    this.renderer.appendChild(parent, tooltip);
    this.pageRedenring = true;
  }
}
