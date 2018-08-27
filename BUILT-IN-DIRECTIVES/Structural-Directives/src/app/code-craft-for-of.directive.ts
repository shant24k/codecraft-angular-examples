import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCodeCraftForOf]'
})
export class CodeCraftForOfDirective {

constructor(private templateRef: TemplateRef<any>,
  private viewContainer: ViewContainerRef) {
}

@Input() set ccForOf(collection: any) {
  if (collection) {
    this.viewContainer.createEmbeddedView(this.templateRef);
  } else {
    this.viewContainer.clear();
  }
}

}
