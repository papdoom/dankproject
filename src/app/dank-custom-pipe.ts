import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
    name: 'sqrt'
})

export class SqrtPipe implements PipeTransform {
    transform(val : number) : number { //'val : number', param and object then ': number', return object
        return Math.sqrt(val);
    }
}