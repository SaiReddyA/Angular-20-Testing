import { AbstractControl, ValidationErrors } from "@angular/forms";

export function noSpaceValidator(control:AbstractControl) : ValidationErrors | null {

    if(control?.value.includes(' ')){
        return { noSpace : true}
    }

    if(control?.value.includes('@')){
        return { atsymbol : true}
    }

    return null;
}