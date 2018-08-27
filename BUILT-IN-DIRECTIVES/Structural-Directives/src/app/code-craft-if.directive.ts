import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCodeCraftIf]'
})
export class CodeCraftIfDirective {

constructor(private templateRef: TemplateRef<any>,
  private viewContainer: ViewContainerRef) {
}

@Input() set ccIf(condition: boolean) {
if (condition) {
this.viewContainer.createEmbeddedView(this.templateRef);
} else {
this.viewContainer.clear();
}
}

}
