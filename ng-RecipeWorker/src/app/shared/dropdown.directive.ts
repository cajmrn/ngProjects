import {Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
    

    // constructor(private eleRef: ElementRef, private renderer: Renderer2){}
    /**
     *  to dynamically attach css to property we'll use the hostbinding
     * We use the hostbinding directive to bind the isOpen value to the element to which we'd like to bind the property.
     * we just want to bind to the class property and attach the open property. 
     * Whenever isOpen is true it will be attached etc..
     * 
     */
    @HostBinding('class.open') isOpen = false;
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
    ngOnInit(){

    }
}