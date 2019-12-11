import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private el : ElementRef) {

    console.log("Diretiva Fundo Amarelo");
  }

  ngOnInit(){
    console.log(this.el);
    
  }

  @HostListener('mouseover') onMouseOver(){
    this.el.nativeElement.style.backgroundColor =  'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor =  'white';
  }

}
