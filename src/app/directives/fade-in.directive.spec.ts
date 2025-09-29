import { FadeInDirective } from './fade-in.directive';
import { ElementRef } from '@angular/core';

describe('FadeInDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: document.createElement('div') } as ElementRef;
    const mockRenderer2 = jasmine.createSpyObj('Renderer2', ['setStyle', 'addClass', 'removeClass']);
    const directive = new FadeInDirective(mockElementRef, mockRenderer2);
    expect(directive).toBeTruthy();
  });
});
